import toast from "react-hot-toast"
import { InputsProps } from "../pages/Signup/types"
import { useState } from "react"

export default function useSignup() {
  const [loading, setLoading] = useState(false);

  const signup = async (inputs: InputsProps) => {
    const success = handleInputErrors(inputs);
    if (!success) return;

    try {
      setLoading(true);
      const res = await fetch('http://localhost:3333/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inputs)
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      toast.error('Server Error');
    } finally {
      setLoading(false);
    }
  }
  
  return { loading, signup }
}

function handleInputErrors(inputs: InputsProps) {
    if (
      !inputs.username ||
      !inputs.password ||
      !inputs.gender ||
      !inputs.fullname ||
      !inputs.confirmPassword
    ) {
      toast.error('Please fill in all fields');
      return false;
    }

    if (inputs.password !== inputs.confirmPassword) {
      toast.error('Password do not match');
      return false;
    }

    if (inputs.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return false;
    }

    return true;
}
