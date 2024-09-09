import { Socket } from "socket.io-client";

interface OnlineUsersProps {
  userId: string;
  socketId: string;
}

export interface SocketContextProps {
  socket: Socket | null;
  onlineUsers: [] | OnlineUsersProps[];
}