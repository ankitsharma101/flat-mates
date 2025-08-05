import React from "react";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9E9E9]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#001BB7] mb-6 text-center">
          Create Account
        </h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="text-[#001BB7] font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0046FF]"
            />
          </div>

          <div>
            <label className="text-[#001BB7] font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0046FF]"
            />
          </div>

          <div>
            <label className="text-[#001BB7] font-semibold">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0046FF]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#0046FF] hover:bg-[#001BB7] text-white font-bold py-2 rounded-lg transition duration-300"
          >
            Sign Up
          </button>

          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-[#FF8040] hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
