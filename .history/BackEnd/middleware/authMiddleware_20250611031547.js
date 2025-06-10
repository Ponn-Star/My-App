import User from "../models/User.js";
import axios from "axios";

// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
    const { userId } = req.auth;
    if (!userId) {
        return res.status(401).json({ success: false, message: "not authenticated" });
    }
    let user = await User.findOne({ idUser: userId });
   
    req.user = user;
    next();
}
