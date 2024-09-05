import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
import useSearch from "../../zustand/useSearch";

export default function SearchInput() {
  const { search, setSearch } = useSearch();
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) return toast.error('Search term must be at least 3 characters long');

    const conversation = conversations.find(c => c.fullname.toLowerCase().includes(search));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      toast.error('No such user found!');
    }
  }

  return (
    <form onSubmit={handleSubmit} method="post" className="flex items-center gap-2" >
      <input 
        type="search" 
        name="search" 
        id="search" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered rounded-full" 
        placeholder="Search..."
      />

      <button 
        type="submit"
        className="btn btn-circle bg-gray-500 text-white"
      >
        <FaSearch size={20} />
      </button>
    </form>
  )
}
