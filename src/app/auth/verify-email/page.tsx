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
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-2xl font-medium">Email Verification</h2>
          <p className="text-sm text-gray-500 text-center">
            We&apos;ve sent a verification code to <b>emailaddress@gmail.com</b>{" "}
            to verify your email address and activate your account.
          </p>
          <input
            type="number"
            name="code"
            placeholder="Verification Code"
            id="verification-code"
            className="rounded-md w-full border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
          />
          <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-md py-2.5 mt-4 w-full">
            <p className="font-medium">Verify My Account</p>
          </button>
          <p className="text-sm text-gray-600">
            Didn&apos;t recieve any code!{" "}
            <a href="resend" className="text-sky-500 hover:text-sky-600">
              Resend
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
