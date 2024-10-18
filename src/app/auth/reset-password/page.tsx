import Image from "next/image";
import React from "react";

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
        <div className="flex flex-col gap-6 items-center w-full">
          <h2 className="text-2xl font-medium">Reset Password</h2>
          <p className="text-sm text-gray-500 text-center">
            Enter a new password for your account. Make sure it&apos;s at least
            8 and it should contain 1 letter, 1 number and 1 special character.
          </p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="rounded-md w-full border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            id="password2"
            className="rounded-md w-full border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
          />
          <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-md py-2.5 mt-4 w-full">
            <p className="font-medium">Reset Password</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
