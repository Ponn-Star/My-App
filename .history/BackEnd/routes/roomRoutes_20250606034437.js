import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerRoom, getAllRooms, seedRooms, deleteRoom, updateRoom } from "../controllers/roomController.js";

const roomRouter = express.Router();

roomRouter.post('/', protect, registerRoom);
roomRouter.get('/', getAllRooms);
roomRouter.post('/seed', seedRooms);
roomRouter.delete('/:id', protect, deleteRoom);
roomRouter.put('/:id', protect, updateRoom);

export default roomRouter;
