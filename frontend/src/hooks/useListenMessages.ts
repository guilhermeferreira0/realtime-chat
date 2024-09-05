import { useEffect } from "react";
import { useSocket } from "../contexts/SocketContext/useSocket";
import useConversation from "../zustand/useConversation";

export default function useListenMessages() {
  const { socket } = useSocket();
  const { messages, setMessage } = useConversation();

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      setMessage([...messages, newMessage]);
    });

    console.log(messages);

    return () => {
      socket?.off('newMessage');
    }
  }, [socket, setMessage, messages]);
}
