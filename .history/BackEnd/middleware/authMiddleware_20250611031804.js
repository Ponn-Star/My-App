import User from "../models/User.js";
// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
    const { userId } = req.auth;
    if (!userId) {
        return res.status(401).json({ success: false, message: "not authenticated" });
    } else{
    const user = await User.findById({ idUser: idUser });
    req.user = user;
    next();
    }
}
