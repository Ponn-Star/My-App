import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { verifyToken } from '@clerk/clerk-sdk-node';
import dotenv from 'dotenv';
import "dotenv/config";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const NOCODB_API_URL = process.env.NOCODB_API_URL;
const NOCODB_API_KEY = process.env.NOCODB_API_KEY;
const CLERK_API_KEY = process.env.CLERK_API_KEY;

// Middleware xác thực token Clerk
async function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid Authorization header' });
  }
  const token = authHeader.split(' ')[1];

  try {
    // Xác thực token và lấy thông tin user
    const session = await verifyToken(token, { secret: CLERK_API_KEY });
    req.user = session;
    next();
  } catch (error) {
    console.error('Auth error:', error);
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Ví dụ route lấy danh sách rooms (chỉ admin và user mới được xem)
app.get('/api/rooms', authenticate, async (req, res) => {
  const role = req.user.publicMetadata.role || 'user';

  if (role !== 'admin' && role !== 'user') {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    const response = await fetch(`${NOCODB_API_URL}/Rooms`, {
      headers: { 'xc-token': NOCODB_API_KEY }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Fetch rooms error:', error);
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
});

// Ví dụ route thêm phòng (chỉ admin được thêm)
app.post('/api/rooms', authenticate, async (req, res) => {
  const role = req.user.publicMetadata.role || 'user';

  if (role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    const response = await fetch(`${NOCODB_API_URL}/Rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xc-token': NOCODB_API_KEY,
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Add room error:', error);
    res.status(500).json({ error: 'Failed to add room' });
  }
});
// Route mặc định
app.get('/', (req, res) => {
  res.send('API backend is running');
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
