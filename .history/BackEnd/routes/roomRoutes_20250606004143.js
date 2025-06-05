import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerRoom, getAllRooms } from "../controllers/roomController.js";

const roomRouter = express.Router();

roomRouter.post('/', protect, registerRoom);
roomRouter.get('/', getAllRooms);

export default roomRouter;
