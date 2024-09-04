import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <form action="" method="post" className="flex items-center gap-2" >
      <input 
        type="search" 
        name="search" 
        id="search" 
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
