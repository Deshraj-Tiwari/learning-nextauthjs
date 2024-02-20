"use client";
import React from "react";
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  const headingStyle = {
    textShadow:
      "-1px -1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
  };
  return (
    <nav
      style={{ borderBottom: "1px solid lightgray" }}
      className="flex justify-between items-center py-3 px-16 rounded"
    >
      <h1 style={headingStyle} className="text-3xl font-bold text-green-500">
        NextAuth.js
      </h1>
      <ul className="flex gap-5">
        <li>
          <Button variant="filled" size="md">
            Sign Up
          </Button>
        </li>
        <li>
          <Button variant="outlined" size="md">
            Log In
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
