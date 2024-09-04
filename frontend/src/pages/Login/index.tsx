import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
        <h1 className="text-3xl font-bold text-center">
          Login
          <strong className="text-blue-500"> ChatApp</strong>
        </h1>

          <form action="" method="post">
            <div>
              <label htmlFor="username" className="label p-2 text-lg font-normal">
                Username
              </label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                placeholder="Enter username" 
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label htmlFor="password" className="label p-2 text-lg font-normal">Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter password" 
                className="w-full input input-bordered h-10 mb-5"
              />
            </div>
            <Link to="/signup" className="text-sm hover:underline">
              Dont´t have an account?
            </Link>
            <div>
              <button className="btn btn-block btn-sm mt-2">Login</button>
            </div>
          </form>
      </div>
    </div>
  )
}
