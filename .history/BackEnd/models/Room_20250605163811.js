import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomType: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  amenities: [{ type: String }],
  images: [{ type: String }],
  isAvailable: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model("Room", roomSchema);
