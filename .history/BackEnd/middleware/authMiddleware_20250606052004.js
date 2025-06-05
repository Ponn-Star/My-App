import User from "../models/User.js";

// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
    // Clerk sẽ gán req.auth.userId nếu token hợp lệ
    const { userId } = req.auth || {};
    if (!userId) {
        return res.json({ success: false, message: "not authenticated" });
    } 
    const user = await User.findById(userId);
    if (!user) {
        return res.json({ success: false, message: "user not found" });
    }
    req.user = user;
    next();
}
