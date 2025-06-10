import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    // Create a Svix instance with clerk webhook secret.
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Getting Headers
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    await whook.verify(JSON.stringify(req.body), headers)

    const {data, type} = req.body

    const userData = {
                idUser: data.id,
                email: data.email_addresses[0].email_address,
                Ten: data.first_name + " " + data.last_name,
                image: data.image_url,
                role: isAdmin ? "Admin" : "User"
            }

    switch (type) {
        case "user.created": {
            await User.create(userData);
            break;
        }

        case "user.updated": {
            await User.findByIdAndUpdate({ idUser: data.id }, userData);
            break;
        }
        case "user.delete": {
            await User.findOneAndDelete({ idUser: data.id });
            break;
        }

        default:
            break;
    }
    res.json({ success: true, message: "Webhook Recieved" })
    } catch (error) {
        console.log("Webhook error:", error.message); // Thêm dòng này để debug
        res.json({ success: false, message: error.message });
    }
}

export default clerkWebhooks;