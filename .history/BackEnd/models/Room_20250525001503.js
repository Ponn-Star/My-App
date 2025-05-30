import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomType:    { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  amenities:   { type: Array, required: true },
  images:    { type: String, required: true },
}, { timestamps: true });

const Room = mongoose.model("Hotel", roomSchema);

export default Room;
