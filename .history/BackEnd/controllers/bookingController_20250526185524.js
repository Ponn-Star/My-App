import Booking from "../models/Booking";
import Room from "../models/Room";

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
    const { room, checkInDate, checkOutDate, guests } = req.body;
    const user = req.user._id;

    // Before Booking Check Availability
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });

    if(!isAvailable) {
        return res.json({ sucess: false, message: "Phòng này đã được đặt hết vào hôm nay"})
    }
    const roomData = await Room.findById(room);
    let totalPrice = roomData.pricePerNight;

    // Calculate totalPrice based on nights
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));

    totalPrice *= nights;
    const booking = await Booking.create({
        user,
        room,
        checkInDate,
        checkOutDate,
        totalPrice,
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
    const bookings = await Booking.find({user}).populate("room hotel").sort({createdAt: -1});
    res.json({success: true, bookings})
  } catch (error) {
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
}

export const getRoomBookings = async (req, res) => {
  try {
    const room = await Room.findOne({ owner: req.auth.userId });
    if (!room) {
      return res.json({ success: false, message: "No Hotel found" });
    }
    const bookings = await Booking.find({ hotel: room._id }).populate("room user").sort({ createdAt: -1 });
    // Total Bookings
    const totalBookings = bookings.length;
    // Total Revenue
    const totalRevenue = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);

    res.json({ success: true, dashboardData: { totalBookings, totalRevenue, bookings } });
  } catch (error) {
    res.json({ success: false, message: "F" });
  }
};

