import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  roomType:    { type: String, required: true },
  PricePerNight: { type: Number, required: true },
  amenities:   { type: Array, required: true },
  images:    [{type: String}],
  isAvailable: {type: Boolean, default: true},
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Room;
