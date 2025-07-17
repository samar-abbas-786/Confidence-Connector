"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "doctor"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form)
    });

    if (res.ok) router.push("/login");
    else alert("Registration failed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4B0082] via-[#6A0DAD] to-[#3B2F63] p-4">
  <form
    onSubmit={handleSubmit}
    className="max-w-md w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl animate-fade-in transition-all duration-500"
  >
    <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg tracking-wide">
      Register
    </h2>

    <input
      type="text"
      placeholder="Username"
      className="w-full mb-4 p-3 rounded-lg bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
      onChange={(e) => setForm({ ...form, username: e.target.value })}
    />

    <input
      type="password"
      placeholder="Password"
      className="w-full mb-4 p-3 rounded-lg bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
      onChange={(e) => setForm({ ...form, password: e.target.value })}
    />

    <select
      className="w-full mb-6 p-3 rounded-lg bg-white/30 text-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
      onChange={(e) => setForm({ ...form, role: e.target.value })}
    >
      <option value="doctor">Doctor</option>
      <option value="patient">Patient</option>
    </select>

    <button
      type="submit"
      className="w-full py-3 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] hover:from-[#4B0082] hover:to-[#6A0DAD] text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
    >
      Register
    </button>
  </form>
</div>

  );
}
