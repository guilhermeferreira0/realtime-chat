import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();
  
  const sendMessage = async (message: string) => {
    try {
      const res = await fetch(`/api/messages/send/${selectedConversation?._id}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ message: message }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMessage([...messages, data]);

    } catch (e) {
      if (e instanceof Error) toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, sendMessage };
}
