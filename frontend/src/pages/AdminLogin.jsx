import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/admin/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/admin");
    } catch (error) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <form
      onSubmit={login}
      className="max-w-md mx-auto mt-40 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-center">Admin Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 bg-slate-800 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="p-3 bg-slate-800 rounded"
      />

      <button className="bg-blue-600 p-3 rounded">Login</button>
    </form>
  );
}
