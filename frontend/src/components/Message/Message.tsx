import { useAuth } from "../../contexts/AuthContext.tsx/useAuth";
import extractTimes from "../../utils/extractTimes";
import useConversation from "../../zustand/useConversation";

interface MessageProps {
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: string;
}

export default function Message(props: MessageProps) {
  const { authUser } = useAuth();
  const { selectedConversation } = useConversation();
  const fromMe = props.senderId === authUser?._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePick : selectedConversation?.profilePick;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
  const formattedTime = extractTimes(props.createdAt);

  return (
    <section>
      <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Profile Picture"
            src={profilePic}/>
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>{props.message}</div>
      <div className="flex items-center justify-center gap-2">
        <time className="text-xs opacity-50"> {formattedTime}</time>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
    </section>
  )
}
