import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface ConversationProps {
  _id: string;
  createdAt: string;
  fullname: string;
  gender: string;
  profilePick: string;
  emoji: string;
  updatedAt: string;
  username: string;
}

export default function useGetConversation() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<ConversationProps[] | []>([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/users');
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setConversations(data.data);
      } catch (e) {
        if (e instanceof Error) toast.error(e.message);
      } finally {
        setLoading(false);
      }
    }

    getConversation();
  }, []);

  return { loading, conversations }
}

