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
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden text-white">
      {/* animated background */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <form
        onSubmit={login}
        className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col gap-5 animate-fadeUp"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Admin Login</h2>

        {/* email */}
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none transition-all duration-300"
        />

        {/* password */}
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none transition-all duration-300"
        />

        {/* button */}
        <button className="mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg font-semibold transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
          Login
        </button>
      </form>

      {/* animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.8s ease forwards;
          }
        `}
      </style>
    </div>
  );
}
