import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  soKhach: { type: Number, required: true }, // số khách
  tongTien: { type: Number, required: true }, // tổng tiền
  phuongThucThanhToan: { type: String, default: "Thanh toán trực tiếp" }, // Stripe, ThanhToanTaiCho
  trangThai: { type: String, enum: ["Chờ Xác Nhận", "Đã Xác Nhận", "Đã Hủy"], default: "Chờ Xác Nhận" },
  daThanhToan: { type: Boolean, default: false },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
