"use client";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <main className="flex items-center justify-center h-[80vh]">
      <div className="bg-white p-10 rounded-lg shadow-2xl max-w-md border">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Log in to your account
        </h1>

        <form className="border border-gray-300 p-4 rounded flex flex-col space-y-5 w-[25vw]">
          <input
            className="border border-gray-300 p-2 rounded mt-2 w-full"
            type="email"
            placeholder="Email"
          />

          <input
            className="border border-gray-300 p-2 rounded mt-2 w-full"
            type="password"
            placeholder="Password"
          />

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            type="submit"
          >
            Log In
          </button>
        </form>

        <div className="bg-red-500 rounded w-[fit-content] px-2 py-1 text-sm mt-3 text-white">
          Error Message
        </div>

        <p className="mt-3 text-center">
          Don't have an account? &nbsp;
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
