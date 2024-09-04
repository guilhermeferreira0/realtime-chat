export default function Conversation() {
  return (
    <section 
      className="flex gap-2 items-center hover:bg-slate-800 rounded p-2 py-1 cursor-pointer transition-all"
    >
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img 
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
            alt="User Avatar"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bol text-gray-200">
            John Doe
          </p>
          <span className="text-xl">Icon</span>
        </div>
      </div>
    </section>
  )
}
