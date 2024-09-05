import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

export default function Sidebar() {
  return (
    <section className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3 mb-2"></div>
      <Conversations />
      <LogoutButton />
    </section>
  )
}
