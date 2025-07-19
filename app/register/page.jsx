"use client";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "doctor",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) router.push("/login");
    else alert("Registration failed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Join our{" "}
            <span className="text-indigo-600 ">confidence connector</span>{" "}
            platform today
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 backdrop-blur-sm">
          {/* Username Field */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your username"
                value={form.username}
                className="w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 hover:border-gray-300"
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                value={form.password}
                className="w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 hover:border-gray-300"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Role Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Account Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setForm({ ...form, role: "doctor" })}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  form.role === "doctor"
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col items-center">
                  <svg
                    className="w-6 h-6 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Doctor</span>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, role: "patient" })}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  form.role === "patient"
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col items-center">
                  <svg
                    className="w-6 h-6 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Patient</span>
                </div>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Create Account
          </button>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href={"/login"}
                type="button"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                onClick={() => console.log("Navigate to login")}
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Your data is encrypted and secure
          </p>
        </div>
      </div>
    </div>
  );
}
