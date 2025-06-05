import { model } from "mongoose";
import Booking from "../models/Booking.js";
import Room from "../models/Room.js";
import Stripe from "stripe";

const checkAvailability = async ({ checkInDate, checkOutDate, room }) => {
  try {
    const bookings = await Booking.find({
      room,
      checkInDate: { $lte: checkOutDate },
      checkOutDate: { $gte: checkInDate },
    });
    const isAvailable = bookings.length === 0;
    return isAvailable;
  } catch (error) {
    console.error(error.message);
  }
};

// check-availability
export const checkAvailabilityAPI = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate } = req.body;
    const isAvailable = await checkAvailability({ checkInDate, checkOutDate, room });
    res.json({ success: true, isAvailable });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//book
export const createBooking = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate, soKhach, phuongThucThanhToan } = req.body;
    const user = req.user._id;

    // Before Booking Check Availability
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });

    if(!isAvailable) {
        return res.json({ success: false, message: "Phòng này đã được đặt hết vào hôm nay"})
    }
    const roomData = await Room.findById(room);
    let tongTien = roomData.pricePerNight;

    // Calculate tongTien based on nights
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));

    tongTien *= nights;
    await Booking.create({
        user,
        room,
        checkInDate,
        checkOutDate,
        soKhach,
        tongTien,
        phuongThucThanhToan,
        trangThai: "Chờ Xác Nhận",
        daThanhToan: false,
    })

    res.json({ success: true, message: "Đặt phòng thành công!" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Đặt phòng không thành công. Xin vui lòng thử lại" })
    }
};


export const getUserBookings = async (req, res) => {
  try {
    const user = req.user._id;
    const bookings = await Booking.find({user}).populate("room").sort({createdAt: -1});
    res.json({success: true, bookings})
  } catch (error) {
    res.json({ success: false, message: "Không thể xác minh chỗ đặt" });
  }
};

export const getRoomBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("room user").sort({ createdAt: -1 });
    const totalBookings = bookings.length;
    const totalRevenue = bookings.reduce((acc, booking) => acc + (booking.tongTien || 0), 0);

    res.json({ success: true, dashboardData: { totalBookings, totalRevenue, bookings } });
  } catch (error) {
    res.json({ success: false, message: "Không thể xác minh chỗ đặt" });
  }
};

export const stripePayment = async (req, res)=> {
  try{
    const { bookingId } = req.body;

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.json({ success: false, message: "Không tìm thấy đặt phòng" });
    }
    const roomData = await Room.findById(booking.room);
    if (!roomData) {
      return res.json({ success: false, message: "Không tìm thấy phòng" });
    }
    const tongTien = booking.tongTien;
    const { origin } = req.headers;

    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

    const line_items = [
      {
        price_data:{
          currency: "vnd",
          product_data:{
            name: roomData.roomType || "Phòng",
          },
          unit_amount: tongTien * 100
        },
        quantity: 1,
      }
    ];

    const session = await stripeInstance.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${origin}/loader/my-bookings`,
      cancel_url: `${origin}/my-bookings`,
      metadata:{
        bookingId,
      }
    });
    res.json({success: true, url: session.url});

  } catch (error) {
    res.json({success: false, message: "Thanh toán không thành công"});
  }
}