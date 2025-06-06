import User from "../models/User.js";
import axios from "axios";

// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
    const { userId } = req.auth || {};
    if (!userId) {
        return res.json({ success: false, message: "not authenticated" });
    }
    let user = await User.findOne({ idUser: userId });
    // Lấy thông tin từ Clerk API để kiểm tra email
    let clerkUser;
    if (!user) {
        try {
            const clerkRes = await axios.get(
                `https://api.clerk.dev/v1/users/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`
                    }
                }
            );
            clerkUser = clerkRes.data;
            const ADMIN_EMAIL = "an.ht.62cntt@ntu.edu.vn";
            const isAdmin = (clerkUser.email_addresses?.[0]?.email_address || "") === ADMIN_EMAIL;
            user = await User.create({
                idUser: userId,
                Ten: (clerkUser.first_name || "") + " " + (clerkUser.last_name || ""),
                email: clerkUser.email_addresses?.[0]?.email_address || "",
                image: clerkUser.image_url || "",
                role: isAdmin ? "Admin" : "User"
            });
        } catch (err) {
            console.error("Error Clerk API:", err?.response?.data || err.message || err);
            return res.json({ success: false, message: "user not found and cannot fetch from Clerk", error: err?.response?.data || err.message });
        }
    } else {
        // Nếu user đã tồn tại, kiểm tra và cập nhật role nếu cần
        try {
            const clerkRes = await axios.get(
                `https://api.clerk.dev/v1/users/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`
                    }
                }
            );
            clerkUser = clerkRes.data;
            const ADMIN_EMAIL = "an.ht.62cntt@ntu.edu.vn";
            const isAdmin = (clerkUser.email_addresses?.[0]?.email_address || "") === ADMIN_EMAIL;
            if (isAdmin && user.role !== "Admin") {
                user.role = "Admin";
                await user.save();
            }
        } catch (err) {
            console.error("Error Clerk API:", err?.response?.data || err.message || err);
            return res.json({ success: false, message: "user not found and cannot fetch from Clerk", error: err?.response?.data || err.message });
        }
    }
    req.user = user;
    next();
}
