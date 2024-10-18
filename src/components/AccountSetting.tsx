import React from "react";
import { CiMail } from "react-icons/ci";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function AccountSetting() {
  return (
    <div className="pt-2 flex flex-col w-full min-h-screen">
      <h2 className="text-lg">Contact info</h2>
      <div className="w-full mt-3">
        <label
          htmlFor="location"
          className="block text-sm leading-6 text-gray-700"
        >
          Map Location
        </label>
        <div className="mt-1">
          <input
            id="location"
            name="location"
            type="text"
            autoComplete="location"
            className="w-full border border-gray-300 rounded-md py-1.5 text-gray-700 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="w-full mt-3">
        <label
          htmlFor="phone"
          className="block text-sm leading-6 text-gray-700"
        >
          Phone
        </label>
        <div className="mt-1 w-full">
          <PhoneInput
            className="w-full"
            defaultCountry="US"
            value=""
            onChange={() => {}}
          />
        </div>
      </div>
      <div className="w-full mt-3">
        <label
          htmlFor="location"
          className="block text-sm leading-6 text-gray-700"
        >
          Email
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 pr-3">
            <span className="text-sky-500">
              <CiMail size={20} />
            </span>
          </div>
          <input
            id="price"
            name="price"
            type="email"
            placeholder="email@gmail.com"
            className="block border border-gray-300 w-full rounded-md py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
}

export default AccountSetting;
