"use client";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "@/schemas/signup";
const Signup = () => {
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, actions) => {
      console.log("🚀 ~ Signup ~ values:", values);
      actions.resetForm();
    },
    validationSchema: signupSchema,
  });

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="bg-white p-10 rounded-lg shadow-2xl border">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create your account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="border border-gray-300 p-4 rounded flex flex-col w-[25vw]"
        >
          <input
            name="name"
            id="nameInput"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="Name"
            className={`${
              errors.name && touched.name ? "input-error" : ""
            } border border-gray-300 p-2 rounded w-full`}
            type="text"
          />

          {errors.name && touched.name && (
            <p htmlFor="nameInput" className="text-sm text-red-500">
              {errors.name}
            </p>
          )}

          <input
            name="email"
            id="emailInput"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email"
            className={`${
              errors.email && touched.email ? "input-error" : ""
            } border border-gray-300 p-2 rounded mt-6 w-full`}
            type="email"
          />

          {errors.email && touched.email && (
            <p htmlFor="emailInput" className="text-sm text-red-500">
              {errors.email}
            </p>
          )}

          <input
            name="password"
            id="passwordInput"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Password"
            className={`${
              errors.password && touched.password ? "input-error" : ""
            } border border-gray-300 p-2 rounded mt-6 w-full`}
            type="password"
          />

          {errors.password && touched.password && (
            <p htmlFor="passwordInput" className="text-sm text-red-500">
              {errors.password}
            </p>
          )}

          <input
            name="confirmPassword"
            id="confirmPasswordInput"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            placeholder="Confirm Password"
            className={`${
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            } border border-gray-300 p-2 rounded mt-6 w-full`}
            type="password"
          />

          {errors.confirmPassword && touched.confirmPassword && (
            <p htmlFor="confirmPasswordInput" className="text-sm text-red-500">
              {errors.confirmPassword}
            </p>
          )}

          <button
            disabled={isSubmitting}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
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
          <Link href="/" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;
