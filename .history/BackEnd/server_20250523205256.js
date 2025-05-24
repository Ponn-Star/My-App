import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { verifyToken } from '@clerk/clerk-sdk-node';;
import "dotenv/config";

const app = express()
app.use(cors()) // Enable Cross-Origin Resource Sharing

app.get('/', (req, res) => res.send("API is working fine"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
