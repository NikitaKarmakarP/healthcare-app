import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { createServer } from 'http';
import { Server } from 'socket.io';

// Routes imports
import apiRoutes from './routes/apiRoutes.js';
import hospitalRoutes from './routes/hospitalRoutes.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/medilink';
/* 
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error('MongoDB Connection Error:', err));
*/

// API Routes
app.use('/api', apiRoutes);
app.use('/api/hospitals', hospitalRoutes);

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MediSaathi Backend API' });
});

// Socket.io for Real-time Video Call Signaling & Chat
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
