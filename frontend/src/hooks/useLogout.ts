import { useState } from "react";
import { useAuth } from "../contexts/AuthContext.tsx/useAuth";
import toast from "react-hot-toast";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const { logoutUser } = useAuth();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      logoutUser();
    } catch (error) {
      toast.error('Server internal error');
    } finally {
      setLoading(false);
    }
  }

  return { logout, loading };
}
