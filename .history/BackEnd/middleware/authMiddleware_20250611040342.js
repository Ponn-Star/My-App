import User from "../models/User.js";

export const protect = async (req, res, next) => {
    // Clerk mới: req.auth là function, phải gọi req.auth()
    const authData = typeof req.auth === "function" ? req.auth() : req.auth;
    const userId = authData?.userId;
    if (!userId) {
        return res.status(401).json({ success: false, message: "not authenticated" });
    }
    const user = await User.findOne({ idUser: userId });
    req.user = user;
    next();
}
