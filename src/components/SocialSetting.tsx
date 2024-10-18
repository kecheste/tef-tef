import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

function SocialSetting() {
  return (
    <div className="pt-2 flex flex-col gap-4 w-full min-h-screen">
      <div className="flex gap-3 items-center mt-4">
        <div className="w-full flex divide-x items-center border border-gray-300 py-1 px-6">
          <select
            id="country"
            name="country"
            className="w-1/3 mr-2 py-1.5 text-gray-700 px-3 sm:text-sm sm:leading-6 outline-none"
          >
            <option>Facebook</option>
            <option>Instagram</option>
            <option>Twitter</option>
            <option>YouTube</option>
          </select>
          <div className="pl-2 w-full">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Profile link/url..."
              className="rounded-md w-full py-1.5 text-gray-700 pl-1 pr-3 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
          </div>
        </div>
        <div className="p-2 bg-gray-100 cursor-pointer">
          <MdOutlineCancel size={30} />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="w-full flex divide-x items-center border border-gray-300 py-1 px-6">
          <select
            id="country"
            name="country"
            className="w-1/3 mr-2 py-1.5 text-gray-700 px-3 sm:text-sm sm:leading-6 outline-none"
          >
            <option>Facebook</option>
            <option>Instagram</option>
            <option>Twitter</option>
            <option>YouTube</option>
          </select>
          <div className="pl-2 w-full">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Profile link/url..."
              className="rounded-md w-full py-1.5 text-gray-700 pl-1 pr-3 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
          </div>
        </div>
        <div className="p-2 bg-gray-100 cursor-pointer">
          <MdOutlineCancel size={30} />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="w-full flex divide-x items-center border border-gray-300 py-1 px-6">
          <select
            id="country"
            name="country"
            className="w-1/3 mr-2 py-1.5 text-gray-700 px-3 sm:text-sm sm:leading-6 outline-none"
          >
            <option>Facebook</option>
            <option>Instagram</option>
            <option>Twitter</option>
            <option>YouTube</option>
          </select>
          <div className="pl-2 w-full">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Profile link/url..."
              className="rounded-md w-full py-1.5 text-gray-700 pl-1 pr-3 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
          </div>
        </div>
        <div className="p-2 bg-gray-100 cursor-pointer">
          <MdOutlineCancel size={30} />
        </div>
      </div>
      <button className="w-full mt-4 flex items-center justify-center bg-gray-100 py-2 px-8 outline-none gap-2">
        <div className="text-gray-700">
          <IoIosAddCircleOutline size={25} />
        </div>
        <p className="text-gray-700">Add New Social Link</p>
      </button>
      <button className="text-white w-1/4 bg-sky-500 mt-8 hover:bg-sky-600 py-3 px-6 rounded-md font-medium">
        Save Changes
      </button>
    </div>
  );
}

export default SocialSetting;
