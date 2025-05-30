import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {type: String, ref: "User", require: true},
  room: {type: String, ref: "Room", require: true},
  checkInDate: {type: Date, require: true},
  checkOutDate: {type: Date, require: true},
  totalPrice: {type: Number, require: true},
  user: {
    type: String,
    enum: ["Chưa kiểm duyệt", "Đã xác nhận", "Đã hũy" ],
    default: "Chưa kiểm duyệt",
  },
  paymentMethod: {
    type: String,
    require: true,
    default: "Thanh toán trực tiếp"
  },
  isPaid: {}
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
