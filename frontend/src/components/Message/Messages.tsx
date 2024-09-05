import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import SkeletonMessage from "../Skeletons";
import Message from "./Message";

export default function Messages() {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef<HTMLDivElement>(null);
  console.log(messages);

  useEffect(() => {
    const scrollLastMessage = setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    return () => clearTimeout(scrollLastMessage);
  }, [messages]);

  return (
    <div className="overflow-auto px-4 flex-1">
      {loading && [...Array(3)].map((_, i) => <SkeletonMessage key={i} /> )}
      {!loading && messages.length === 0 && (
        <p className="text-center" >Send a message to start the conversation</p>
      )}
      {!loading && messages.length > 0 && messages.map(msg => (
        <div key={msg._id} ref={lastMessageRef}>
          <Message 
            senderId={msg.senderId}
            receiverId={msg.receiverId}
            message={msg.message}
            createdAt={msg.createdAt}
          />
        </div>
      ))}
    </div>
  )
}
