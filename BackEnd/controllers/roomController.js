import Room from "../models/Room";
import User from "../models/User";

export const registerRoom = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    const owner = req.user._id;

    // Check if User Already Registered
    const room = await Room.findOne({ owner });
    if (room) {
      return res.json({ success: false, message: "Hotel Already Registered" });
    }

    await Room.create({ name, address, contact, city, owner });

    await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

    res.json({ success: true, message: "Hotel Registered Registered" });
  } catch (error) {
        res.json({ success: false, message: error.message});
  }
};
