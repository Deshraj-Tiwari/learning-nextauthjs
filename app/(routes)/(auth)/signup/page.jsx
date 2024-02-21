"use client";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <main className="flex items-center justify-center mt-2 h-[80vh]">
      <div className="bg-white p-10 rounded-lg shadow-2xl border">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Create your account
        </h1>

        <form className="border border-gray-300 p-4 rounded flex flex-col gap-4 w-[25vw]">
          <input
            placeholder="Name"
            className="border border-gray-300 p-2 rounded mt-2 w-full"
            type="text"
          />

          <input
            placeholder="Email"
            className="border border-gray-300 p-2 rounded mt-2 w-full"
            type="email"
          />

          <input
            placeholder="Password"
            className="border border-gray-300 p-2 rounded mt-2 w-full"
            type="password"
          />

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="bg-red-500 rounded w-[fit-content] px-2 py-1 text-sm mt-3 text-white">
          Error Message
        </div>

        <p className="mt-3 text-center">
          Already have an account? &nbsp;
          <Link href="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;
