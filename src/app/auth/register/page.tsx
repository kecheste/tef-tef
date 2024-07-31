import Image from "next/image";
import React from "react";
import { FaGoogle, FaPhone } from "react-icons/fa";

function page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="m-12 rounded-xl p-12 bg-white shadow-sm flex flex-col items-center w-1/3">
        <Image
          alt=""
          src="/logo.png"
          height={200}
          width={200}
          className="h-[1-0px] w-[100px] object-cover mt-8 mb-14"
        />
        <div className="flex flex-col gap-4 self-start w-full">
          <div className="text-xl">Create account</div>
          <p className="text-sm">
            Already have account?
            <span>
              <a href="/auth/login" className="text-sky-500 font-medium">
                {" "}
                Log In
              </a>
            </span>
          </p>
          <div className="mt-2 flex gap-4 w-full">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              id="first-name"
              className="rounded-md w-full border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              id="first-name"
              className="rounded-md w-full border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
          </div>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              id="first-name"
              className="rounded-md w-full border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
          </div>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="first-name"
              className="rounded-md w-full border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
          </div>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              id="first-name"
              className="rounded-md w-full border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex h-6 items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-sky-500 border border-gray-400"
              />
            </div>
            <div className="text-sm leading-6">
              <p className="text-gray-400 text-sm">
                I&apos;ve read and agree with your{" "}
                <a className="text-sky-500 font-medium">Terms of Services</a>
              </p>
            </div>
          </div>
          <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-md py-2.5 mt-4">
            <p className="font-medium">Create Account</p>
          </button>

          <div className="my-4 self-center">
            <p className="text-gray-500">OR</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-full border border-gray-300 flex gap-2 px-4 py-2 rounded-sm">
              <FaPhone size={20} className="text-gray-300" />
              <p className="text-sm text-gray-600">Sign up with Phone</p>
            </div>
            <div className="w-full border border-gray-300 flex gap-2 px-4 py-2 rounded-sm">
              <FaGoogle size={20} className="text-gray-300" />
              <p className="text-sm text-gray-600">Sign up with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
