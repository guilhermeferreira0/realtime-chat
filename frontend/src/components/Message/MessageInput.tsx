import { BsSend } from "react-icons/bs"

export default function MessageInput() {
  return (
    <form action="" method="post">
      <div className="w-full relative">
        <input 
          type="text" 
          name="" 
          id="" 
          className="border text-sm rounded-lg block w-full py-2.5 pl-2.5 pr-9 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message..."
        />
        <button 
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  )
}
