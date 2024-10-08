import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

interface UserSocketProps {
  userId: string;
  socketId: string;
}

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
  },
});

export const getReceiverSockerId = (receiverId: string) => {
  return userSocketMap.find((vl) => vl.userId == receiverId);
};

const userSocketMap = [] as UserSocketProps[]; // { userId: SocketId}

io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId as string;
  if (userId) userSocketMap.push({ userId, socketId: socket.id });
  // io.emit() is used to send events to all the connected clients
  io.emit('getOnlineUsers', userSocketMap);

  socket.on('disconnect', () => {
    const index = userSocketMap.findIndex((vl) => vl.userId === userId);
    userSocketMap.splice(index, 1);
    io.emit('getOnlineUsers', userSocketMap);
  });
});

export { app, io, server };
