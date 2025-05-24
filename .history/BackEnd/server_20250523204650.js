import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { verifyToken } from '@clerk/clerk-sdk-node';;
import "dotenv/config";

const app = express()
