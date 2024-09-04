import Conversation from "./Conversation";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

export default function Sidebar() {
  return (
    <section className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversation />
      <div className="divider mt-1 mb-1 px-3"></div>
      <LogoutButton />
    </section>
  )
}
