import { create } from 'zustand';

interface ConversationProps {
  fullname: string;
  profilePick: string;
  emoji: string;
  _id: string;
}

interface MessageProps {
  senderId: string;
  receiverId: string;
  message: string;
  _id: string;
  createdAt: string;
}

interface UseConversationProps {
  selectedConversation: ConversationProps | null;
  setSelectedConversation: (vl: ConversationProps | null) => void;
  messages: MessageProps[];
  setMessage: (vl: MessageProps[]) => void;
}

const useConversation = create<UseConversationProps>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({selectedConversation}),
  messages: [],
  setMessage: (messages) => set({messages}),
}));

export default useConversation;