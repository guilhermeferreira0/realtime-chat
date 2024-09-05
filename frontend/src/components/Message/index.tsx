import { useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useAuth } from "../../contexts/AuthContext/useAuth";

export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, []);

  return (
    <section className="md:min-w-[450px] flex flex-col">
      {/* Header */}
      {selectedConversation ? (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center">
            <h3 className="text-lg">
              To: 
              <strong> {selectedConversation.fullname}</strong>
            </h3>
          </div>
          <Messages />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
      )}
    </section>
  )
}

function NoChatSelected() {
  const {authUser} = useAuth();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div 
        className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col"
      >
        <p>Welcome {authUser?.fullname}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="mx-auto text-3xl md:text-6xl" />
      </div>
    </div>
  )
}
