import toast from "react-hot-toast";
import { InputsProps } from "../pages/Login/types";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext.tsx/useAuth";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setUserContext } = useAuth();

  const login = async (inputs: InputsProps) => {
    const success = handleInputErrors(inputs);
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: inputs.username, password: inputs.password}),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setUserContext(data.data);
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return { loading, login };
}

function handleInputErrors(inputs: InputsProps) {
  if (
    !inputs.username ||
    !inputs.password
  ) {
    toast.error('Please fill in all fields');
    return false;
  }

  return true;
}

