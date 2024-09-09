import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { useSocket } from "../contexts/SocketContext/useSocket";

export default function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();
  const { socket } = useSocket();
  socket?.on('newMessage', (data) => {
    setMessage([...messages, data])
  })
  
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation?._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.message);
        setMessage(data);
      } catch (e) {
        if (e instanceof Error) toast.error(e.message);
      } finally {
        setLoading(false);
      }
    }

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessage]);

  return { messages, loading }
}
