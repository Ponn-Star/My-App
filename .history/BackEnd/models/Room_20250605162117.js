import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  roomType: { type: String },
  // ...bổ sung các trường khác nếu cần...
}, { timestamps: true });

export default mongoose.model("Room", roomSchema);
