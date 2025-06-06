export const getUserData = async (req, res) => {
    try {
        const role = req.user.role;
        const recentSearchedRoomType = req.user.recentSearchedRoomType || [];
        res.json({success: true, role, recentSearchedRoomType});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export const storeRecentSearchedRoomType = async (req, res) => {
  try {
    const { recentSearchedRoomType } = req.body;
    const user = req.user;

    if (!user.recentSearchedRoomType) user.recentSearchedRoomType = [];

    if (user.recentSearchedRoomType.length < 3) {
      user.recentSearchedRoomType.push(recentSearchedRoomType);
    } else {
      user.recentSearchedRoomType.shift();
      user.recentSearchedRoomType.push(recentSearchedRoomType);
    }
    await user.save();
    res.json({ success: true, message: "Room type added" });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}
