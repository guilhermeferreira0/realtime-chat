import { useState } from "react";
import { Link } from "react-router-dom";
import { InputsProps } from "./types";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const [inputs, setInputs] = useState({} as InputsProps);
  const { login, loading } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
        <h1 className="text-3xl font-bold text-center">
          Login
          <strong className="text-blue-500"> ChatApp</strong>
        </h1>

          <form onSubmit={handleSubmit} method="post">
            <div>
              <label htmlFor="username" className="label p-2 text-lg font-normal">
                Username
              </label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                onChange={(e) => setInputs(prev => ({ ...prev, username: e.target.value}))}
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
                onChange={(e) => setInputs(prev => ({ ...prev, password: e.target.value}))}
                placeholder="Enter password" 
                className="w-full input input-bordered h-10 mb-5"
              />
            </div>
            <Link to="/signup" className="text-sm hover:underline">
              Dont´t have an account?
            </Link>
            <div>
              <button 
                className="btn btn-block btn-sm mt-2"
                disabled={loading}
              >
                {loading ? (<span className="loading loading-spinner"></span>) : 'Login'}
              </button>
            </div>
          </form>
      </div>
    </div>
  )
}
