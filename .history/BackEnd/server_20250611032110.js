import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from './configs/db.js';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js';
import userRouter from './routes/userRoutes.js';
import roomRouter from './routes/roomRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
import { stripeWebhooks } from './controllers/stripeWebhooks.js';

connectDB()

const app = express()
app.use(cors())

app.post('/api/stripe', express.raw({ type: 'application/json' }), stripeWebhooks);

app.use(express.json())

app.use("/api/clerk", clerkWebhooks);

// Route này phải đặt trước middleware xác thực!
app.get('/', (req, res) => res.send("API is working"));

// Các route dưới đây mới dùng middleware xác thực
app.use(clerkMiddleware())
app.use(requireAuth());

app.use('/api/user', userRouter)
app.use('/api/rooms', roomRouter)
app.use('/api/bookings', bookingRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
