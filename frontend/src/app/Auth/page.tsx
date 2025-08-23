import React from "react";

function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-2xl border border-gray-200">
        {/* Logo */}
        <div className="flex justify-center mb-6 flex-col items-center">
          <h1 className="text-2xl font-bold text-purple-600">CLOK</h1>
          <p className="text-sm text-gray-500">Clok it. Don't miss it.</p>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center mb-1 text-gray-500">
          Sign In to Clok
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Welcome back! Please enter your details to sign in.
        </p>

        {/* Google Sign In */}
        <button className="flex items-center justify-center w-full gap-2 px-4 py-2 border rounded-md hover:bg-gray-50">
          {/* Google SVG */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.9 0 6.6 1.7 8.1 3.1l6-6C34.5 3.5 29.7 1.5 24 1.5 14.7 1.5 7 7.6 4.1 15.9l7.4 5.8C13 16.7 18 13.5 24 13.5z"
            />
            <path
              fill="#4285F4"
              d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.6c-.5 2.7-2 5-4.3 6.6l6.7 5.2C42.7 37.3 46.1 31.4 46.1 24.5z"
            />
            <path
              fill="#FBBC05"
              d="M11.5 28.3c-1.2-3.7-1.2-7.6 0-11.3l-7.4-5.8C1.5 16.6 0 20.2 0 24c0 3.8 1.5 7.4 4.1 10.3l7.4-6z"
            />
            <path
              fill="#34A853"
              d="M24 46.5c6.5 0 11.9-2.1 15.9-5.7l-6.7-5.2c-2 1.4-4.6 2.2-9.2 2.2-6 0-11-3.2-13.5-8.1l-7.4 5.8C7 40.4 14.7 46.5 24 46.5z"
            />
          </svg>
          <span>Sign in with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR CONTINUE WITH</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Sign In Button */}
        <button className="w-full py-2 mb-4 text-white bg-purple-600 rounded-md hover:bg-purple-700">
          Sign In
        </button>

        {/* Forgot Password */}
        <div className="text-center">
          <a href="#" className="text-sm text-purple-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Sign Up */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-600 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
