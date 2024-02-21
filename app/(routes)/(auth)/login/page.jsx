"use client";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "@/schemas/login";

const Login = () => {
  const {
    handleChange,
    touched,
    isSubmitting,
    handleBlur,
    values,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, actions) => {
      console.log("🚀 ~ Login ~ values:", values);
      actions.resetForm();
    },
    validationSchema: loginSchema,
  });
  return (
    <main className="flex items-center justify-center h-[80vh]">
      <div className="bg-white p-10 rounded-lg shadow-2xl max-w-md border">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Log in to your account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="border border-gray-300 p-4 rounded flex flex-col w-[25vw]"
        >
          <input
            className={`${
              errors.email && touched.email ? "input-error" : ""
            } border border-gray-300 p-2 rounded w-full`}
            type="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            id="emailInput"
          />

          {errors.email && touched.email && (
            <p htmlFor="nameInput" className="text-sm text-red-500">
              {errors.email}
            </p>
          )}

          <input
            className={`${
              errors.password && touched.password ? "input-error" : ""
            } border border-gray-300 p-2 rounded w-full mt-6`}
            type="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            name="password"
            id="passwordInput"
          />

          {errors.password && touched.password && (
            <p htmlFor="nameInput" className="text-sm text-red-500">
              {errors.password}
            </p>
          )}

          <button
            disabled={isSubmitting}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-6 disabled:cursor-not-allowed disabled:opacity-50"
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
