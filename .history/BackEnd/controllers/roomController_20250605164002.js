import Room from "../models/Room.js";

export const registerRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, amenities, images, isAvailable } = req.body;

    // Check if Room Already Registered (by roomType and pricePerNight)
    const room = await Room.findOne({ roomType, pricePerNight });
    if (room) {
      return res.json({ success: false, message: "Room Already Registered" });
    }

    await Room.create({ roomType, pricePerNight, amenities, images, isAvailable });

    res.json({ success: true, message: "Room Registered Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
