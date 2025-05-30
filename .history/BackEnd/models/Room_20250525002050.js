import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomType:    { type: String, required: true },
  PricePerNight: { type: Number, required: true },
  amenities:   { type: Array, required: true },
  images:    [{type: String}],
}, { timestamps: true });

const Room = mongoose.model("Room", roomSchema);

export default Room;
