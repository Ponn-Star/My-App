import Room from "../models/Room.js";

export const registerRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, amenities, images, isAvailable } = req.body;

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

export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json({ success: true, rooms });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const seedRooms = async (req, res) => {
  try {
    await Room.insertMany([
      {
        roomType: "Lều đơn",
        pricePerNight: 600,
        amenities: ["WiFi Miễn Phí", "Bữa Sáng Miễn Phí"],
        images: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"],
        isAvailable: true,
      },
      {
        roomType: "Lều đôi",
        pricePerNight: 800,
        amenities: ["WiFi Miễn Phí", "View Núi Hồ", "Khu Đồi Thông"],
        images: ["https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600"],
        isAvailable: true,
      },
      {
        roomType: "Lều gia đình",
        pricePerNight: 1200,
        amenities: ["WiFi Miễn Phí", "Bữa Sáng Miễn Phí", "Khu Cẩm Tú Cầu", "View Núi Hồ"],
        images: ["https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600"],
        isAvailable: true,
      },
    ]);
    res.json({ success: true, message: "Seeded rooms" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Room deleted" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, room: updatedRoom });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
