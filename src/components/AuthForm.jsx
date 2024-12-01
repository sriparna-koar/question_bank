"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function AuthForm({ isSignup = false }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignup ? "Signing up..." : "Logging in...");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-3xl overflow-hidden relative transform transition duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200 opacity-10 pointer-events-none"></div>
        <div className="px-8 py-10">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8 drop-shadow-lg">
            {isSignup ? "Create an Account" : "Welcome Back"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3.5 text-gray-400 text-xl" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-gray-50"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3.5 text-gray-400 text-xl" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-gray-50"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full hover:from-indigo-600 text-black bg-blue-200 hover:to-purple-600 text-black py-3 rounded-lg shadow-lg text-black font-semibold tracking-wide uppercase transform transition duration-300"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <a
                href="#"
                className="text-blue-900 hover:underline font-bold"
              >
                {isSignup ? "Login here" : "Sign up now"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
