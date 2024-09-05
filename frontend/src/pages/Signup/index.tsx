import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import { GenderProps, InputsProps } from "./types";
import useSignup from "../../hooks/useSignup";



export default function Signup() {
  const [inputs, setInputs] = useState({} as InputsProps);

  const { loading, signup } = useSignup();

  const setCheckboxSelected = (gender: string) => {
    if (
      gender === GenderProps.MALE ||
      gender === GenderProps.FEMALE
    ) {
      setInputs(prev => ({ ...prev, gender: gender}))
    }
    return;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold text-center">
          Signup
          <strong className="text-blue-500"> ChatApp</strong>
        </h1>

        <form onSubmit={handleSubmit} method="post">
          <div>
            <label 
              htmlFor="fullname" 
              className="label p-2 text-lg font-normal"
            >
              Fullname
            </label>
            <input 
              type="text" 
              name="fullname" 
              id="fullname"
              onChange={(e) => setInputs(prev => ({ ...prev, fullname: e.target.value}))}
              required
              placeholder="John Doe" 
              className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label 
              htmlFor="username" 
              className="label p-2 text-lg font-normal"
            >
              Username
            </label>
            <input 
              type="text" 
              name="username" 
              id="username" 
              onChange={(e) => setInputs(prev => ({ ...prev, username: e.target.value}))}
              required
              placeholder="Johndoe" 
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="label p-2 text-lg font-normal"
            >
              Password
            </label>
            <input 
              type="password" 
              name="password" 
              minLength={6}
              id="password" 
              onChange={(e) => setInputs(prev => ({ ...prev, password: e.target.value}))}
              required
              placeholder="Enter password" 
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label 
              htmlFor="confirmPassword" 
              className="label p-2 text-lg font-normal"
            >
              Confirm Password
            </label>
            <input 
              type="password" 
              name="confirmPassword" 
              id="confirmPassword" 
              minLength={6}
              onChange={(e) => setInputs(prev => ({ ...prev, confirmPassword: e.target.value}))}
              required
              placeholder="Confirm password" 
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* {GENDER CHECKBOX GOES HERE} */}
          <GenderCheckbox setCheckboxSelected={setCheckboxSelected} />

          <Link to="/login" className="text-sm hover:underline block mt-5">Already have an account?</Link>
          <div>
            <button 
              className="btn btn-block btn-sm mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
