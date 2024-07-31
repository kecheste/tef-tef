import Image from "next/image";
import React from "react";
import { FaGoogle, FaPhone } from "react-icons/fa";

function page() {
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="m-12 rounded-xl p-12 bg-white shadow-sm flex flex-col items-center w-1/3">
        <Image
          alt=""
          src="/logo.png"
          height={200}
          width={200}
          className="h-[1-0px] w-[100px] object-cover mt-8 mb-14"
        />
        <div className="flex flex-col gap-6 items-center w-full">
          <h2 className="text-2xl font-medium">Forget Password</h2>
          <p className="text-sm text-gray-500 text-center">
            Go back to{" "}
            <a href="/auth/login" className="text-sky-500 hover:text-sky-600">
              Sign In
            </a>
          </p>
          <p className="text-sm text-gray-500 text-center">
            Don&apos;t have account{" "}
            <a
              href="/auth/register"
              className="text-sky-500 hover:text-sky-600"
            >
              Create Account
            </a>
          </p>
          <input
            type="number"
            name="code"
            placeholder="Email Address"
            id="verification-code"
            className="rounded-md w-full border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
          />
          <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-md py-2.5 mt-4 w-full">
            <p className="font-medium">Reset Password</p>
          </button>
          <div className="my-4 self-center">
            <p className="text-gray-500">OR</p>
          </div>
          <div className="flex items-center gap-4 w-full">
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
