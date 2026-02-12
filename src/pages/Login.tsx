import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!user.trim()) return;
    localStorage.setItem("user", user);
    navigate("/board");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-2xl mb-4">Login</h1>
      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter username"
        className="border p-2 rounded mb-2"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
