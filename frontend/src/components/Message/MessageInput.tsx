import { BsSend } from "react-icons/bs"
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

export default function MessageInput() {
  const [message, setMessage] = useState('');
  const { sendMessage, loading } = useSendMessage();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="w-full relative">
        <input 
          type="text" 
          name="" 
          id="" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border text-sm rounded-lg block w-full py-2.5 pl-2.5 pr-9 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message..."
        />
        <button 
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? <span className="loading loading-spinner"></span> : <BsSend />}    
        </button>
      </div>
    </form>
  )
}
