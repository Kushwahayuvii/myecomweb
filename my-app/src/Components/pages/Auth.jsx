import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-6">

      <div className="w-full max-w-4xl bg-[#111827]/70 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#ffba00] text-black p-10">
          <h2 className="text-3xl font-bold mb-4">
            {isLogin ? "Welcome Back!" : "Join MyShop"}
          </h2>
          <p className="text-center mb-6">
            {isLogin
              ? "Login to continue shopping with us."
              : "Create your account and start shopping today."}
          </p>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="border-2 border-black px-6 py-2 rounded-lg font-semibold hover:bg-black hover:text-[#ffba00] transition"
          >
            {isLogin ? "Create Account" : "Login Instead"}
          </button>
        </div>

        {/* Right Side Form */}
        <div className="p-10 text-white">

          <h2 className="text-3xl font-bold mb-6 text-[#ffba00] text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          <form className="space-y-5">

            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:border-[#ffba00] outline-none"
              />
            )}

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:border-[#ffba00] outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:border-[#ffba00] outline-none"
            />

            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:border-[#ffba00] outline-none"
              />
            )}

            {isLogin && (
              <div className="text-right text-sm text-gray-400 hover:text-[#ffba00] cursor-pointer">
                Forgot Password?
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#ffba00] text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>

          </form>

          {/* Mobile Toggle */}
          <div className="mt-6 text-center md:hidden">
            <span className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-[#ffba00] font-semibold"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
