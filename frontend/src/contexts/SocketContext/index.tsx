import { createContext, ReactNode, useEffect, useState } from "react";
import { useAuth } from "../AuthContext/useAuth";
import { io, Socket } from "socket.io-client";
import { SocketContextProps } from "./types";

export const Context = createContext({} as SocketContextProps);

export function SocketProvider({children}: {children: ReactNode}) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      const socket = io('http://localhost:3333', {
        query: {
          userId: authUser._id
        }
      });
      setSocket(socket);
      // socket.on() is used to listen to the events. Can be used both on client and server side
      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.close()
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <Context.Provider value={{
      socket,
      onlineUsers
    }}>
      {children}
    </Context.Provider>
  );
}