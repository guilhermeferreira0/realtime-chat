import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { Toaster } from "react-hot-toast"
import { useAuth } from "./contexts/AuthContext.tsx/useAuth"

function App() {
  const { authUser } = useAuth();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to='/login' />}/>
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />}/>
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <Signup />}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
