import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[20rem] md:w-[30rem] mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-[750] mb-4 text-center">Form</h2>
        <p className="text-gray-600 mb-6 text-center">
          Enter your credentials.
        </p>
        <form className="space-y-4">
          <div className="flex gap-4">
            <div>
              <label
                htmlFor="FirstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="FirstName"
                name="FirstName"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <label
                htmlFor="LastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="LastName"
                name="LastName"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile No.
            </label>
            <input
              type="number"
              id="phone"
              name="Aadhar"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label
              htmlFor="Aadhar"
              className="block text-sm font-medium text-gray-700"
            >
              Aadhar
            </label>
            <input
              type="number"
              id="Aadhar"
              name="Aadhar"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label htmlFor="Address">Address</label>

            <textarea
              name="Address"
              id="Address"
              //   cols=""
              //   rows="5"
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-gray-400 resize-none"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-2 rounded-md hover:bg-gray-900 font-[600]"
              //   disabled={isSubmitting}
              // onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div className="text-[.9rem] text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="underline">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
