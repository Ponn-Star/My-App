import User from "../models/User.js";

// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
    // Clerk sẽ gán req.auth.userId nếu token hợp lệ
    const { userId } = req.auth || {};
    if (!userId) {
        return res.json({ success: false, message: "not authenticated" });
    }
    // Tìm user theo idUser (không phải _id)
    let user = await User.findOne({ idUser: userId });
    if (!user) {
        // Nếu chưa có user, tạo mới user từ thông tin Clerk (nếu có)
        // Bạn cần truyền thêm thông tin user từ frontend hoặc lấy từ Clerk API
        // Ví dụ: req.auth chứa email, tên, image (nếu cấu hình đúng)
        const { email, imageUrl, firstName } = req.auth || {};
        if (!email || !firstName || !imageUrl) {
            return res.json({ success: false, message: "user not found and missing info to create" });
        }
        user = await User.create({
            idUser: userId,
            Ten: firstName,
            email,
            image: imageUrl,
            role: "User"
        });
    }
    req.user = user;
    next();
}
