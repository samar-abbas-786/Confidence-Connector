'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      username: form.username,
      password: form.password,
    });

    if (res.ok && !res.error) {
      router.push('/dashboard');
    } else {
      setError(res.error || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4B0082] via-[#6A0DAD] to-[#3B2F63] p-4">
  <form
    onSubmit={handleLogin}
    className="max-w-md w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl animate-fade-in transition-all duration-500"
  >
    <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg tracking-wide">
      Login
    </h2>

    {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

    <input
      type="text"
      placeholder="Username"
      className="w-full mb-4 p-3 rounded-lg bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
      onChange={(e) => setForm({ ...form, username: e.target.value })}
      required
    />

    <input
      type="password"
      placeholder="Password"
      className="w-full mb-6 p-3 rounded-lg bg-white/30 text-white placeholder-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
      onChange={(e) => setForm({ ...form, password: e.target.value })}
      required
    />

    <button
      type="submit"
      className="w-full py-3 bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] hover:from-[#4B0082] hover:to-[#6A0DAD] text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
    >
      Login
    </button>
  </form>
</div>

  );
}
