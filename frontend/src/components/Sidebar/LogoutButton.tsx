import { BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout"

export default function LogoutButton() {
  const { loading, logout } = useLogout();

  return (
    <button  
      className="mt-auto"
      onClick={logout}
      disabled={loading}
    >
      {loading ? (
        <span className="loading loading-spinner"></span>
      ): (
        <BiLogOut 
          className="text-white w-6 h-6 cursor-pointer hover:text-gray-300 transition-all" 
        />
      )}
    </button>
  )
}
