"use client";
import React from "react";

const Home = async () => {
  return (
    <main className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-5xl font-semibold text-blue-500">NextAuth.js</h1>
      <br />
      <p className="text-xl text-gray-700">
        NextAuth.js is used for easier authentication in NEXT js. To test this
        application, simply click on the login or signup button in the navbar.
      </p>
    </main>
  );
};

export default Home;
