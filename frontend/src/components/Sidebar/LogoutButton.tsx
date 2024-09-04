import { BiLogOut } from "react-icons/bi"

export default function LogoutButton() {
  return (
    <div className="mt-auto">
      <BiLogOut 
        className="text-white w-6 h-6 cursor-pointer hover:text-gray-300 transition-all" 
      />
    </div>
  )
}
