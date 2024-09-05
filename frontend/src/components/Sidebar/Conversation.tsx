import { useSocket } from "../../contexts/SocketContext/useSocket";
import useConversation from "../../zustand/useConversation";

interface ConversationProps {
  fullname: string;
  profilePick: string;
  emoji: string;
  _id: string;
}

export default function Conversation(props: ConversationProps) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === props._id;
  const { onlineUsers } = useSocket();
  let isOnline = false;
  if (onlineUsers !== null && onlineUsers.length > 0) {
    isOnline = onlineUsers.includes(props._id as never);
  }

  return (
    <section 
      className={`flex gap-2 items-center hover:bg-slate-800 rounded p-2 py-1 cursor-pointer transition-all ${isSelected ? 'bg-slate-800' : ''}`}
      onClick={() => setSelectedConversation(props)}
    >
      <div className={`avatar ${isOnline && 'online'}`}>
        <div className="w-12 rounded-full">
          <img 
            src={props.profilePick} 
            alt="User Avatar"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bol text-gray-200">
            {props.fullname}
          </p>
          <span className="text-xl">{props.emoji}</span>
        </div>
      </div>
    </section>
  )
}
