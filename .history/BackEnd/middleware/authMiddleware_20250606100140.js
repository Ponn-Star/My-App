import User from "../models/User.js";
import axios from "axios";

// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
    const { userId } = req.auth || {};
    if (!userId) {
        return res.json({ success: false, message: "not authenticated" });
    }
    let user = await User.findOne({ idUser: userId });
    let clerkUser;
    try {
        // Lấy thông tin user từ Clerk API
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

        if (!user) {
            // Nếu chưa có user, tạo mới
            user = await User.create({
                idUser: userId,
                Ten: (clerkUser.first_name || "") + " " + (clerkUser.last_name || ""),
                email: clerkUser.email_addresses?.[0]?.email_address || "",
                image: clerkUser.image_url || "",
                role: isAdmin ? "Admin" : "User"
            });
            console.log("User created in MongoDB:", user);
        } else {
            // Nếu đã có user, cập nhật role nếu cần
            if (isAdmin && user.role !== "Admin") {
                user.role = "Admin";
                await user.save();
                console.log("User role updated to Admin:", user.email);
            }
        }
    } catch (err) {
        console.error("Error Clerk API or MongoDB:", err?.response?.data || err.message || err);
        return res.json({ success: false, message: "user not found and cannot fetch from Clerk", error: err?.response?.data || err.message });
    }
    req.user = user;
    next();
}
