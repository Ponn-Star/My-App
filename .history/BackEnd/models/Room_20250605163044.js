import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomType: { type: String, required: true }, // "Lều đơn", "Lều đôi", ...
  pricePerNight: { type: Number, required: true },
  amenities: [{ type: String }], // ["WiFi Miễn Phí", ...]
  images: [{ type: String }], // đường dẫn ảnh
  isAvailable: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model("Room", roomSchema);
