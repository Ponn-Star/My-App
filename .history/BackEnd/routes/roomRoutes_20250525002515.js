import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerHotel } from "../controllers/roomController.js";

const roomRouter = express.Router();

roomRouter.post('/', protect, registerHotel);

export default roomRouter;
