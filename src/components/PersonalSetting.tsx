import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { SlOptions } from "react-icons/sl";

function PersonalSetting() {
  return (
    <div className="pt-2 flex flex-col w-full min-h-screen">
      <h2 className="text-gray-700 font-medium my-3">Basic Information</h2>
      <div className="flex gap-8 w-full">
        <div className="flex flex-col w-1/3">
          <p className="text-gray-500 text-sm mt-3">Profile Picture</p>
          <div className="mt-1 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-full">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="mt-4 flex flex-col text-sm leading-6 text-gray-600 w-full">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-sky-500 focus-within:outline-none hover:text-sky-600"
                >
                  <span className="w-full">Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1 w-full">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-2">
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm leading-6 text-gray-600"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="rounded-md w-full border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="last-name"
                className="block text-sm leading-6 text-gray-600"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="rounded-md w-full border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-full">
              <label
                htmlFor="country"
                className="block text-sm leading-6 text-gray-600"
              >
                Experience
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  className="w-full rounded-md border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm sm:text-sm sm:leading-6 outline-none"
                >
                  <option>Entry Level</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="country"
                className="block text-sm leading-6 text-gray-600"
              >
                Education
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  className="w-full rounded-md border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm sm:text-sm sm:leading-6 outline-none"
                >
                  <option>Diploma</option>
                  <option>Bachelors</option>
                  <option>Masters</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <div className="w-full">
              <label
                htmlFor="username"
                className="block text-sm leading-6 text-gray-600"
              >
                Personal Website
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm border border-gray-300 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="rounded-md w-full py-1.5 text-gray-700 pl-1 pr-3 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-sky-500 hover:bg-sky-600 text-sm font-medium py-3 px-6 rounded-md text-white">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-md mt-4 text-gray-700 font-medium">Your CV/Resume</h2>
      <div className="flex flex-wrap gap-6 mt-3">
        <div className="bg-gray-100 py-3 px-8 flex gap-4 items-center mb-3 cursor-pointer">
          <FaRegFileAlt size={25} className="text-sky-500" />
          <div className="flex flex-col">
            <p className="text-gray-600 text-md font-medium">
              Professional Resume
            </p>
            <p className="text-gray-400 text-sm">3.5MB</p>
          </div>
          <SlOptions size={20} className="text-gray-500 ml-4" />
        </div>
        <div className="bg-gray-100 py-3 px-8 flex gap-4 items-center mb-3 cursor-pointer">
          <FaRegFileAlt size={25} className="text-sky-500" />
          <div className="flex flex-col">
            <p className="text-gray-600 text-md font-medium">
              Product Designer
            </p>
            <p className="text-gray-400 text-sm">5.6MB</p>
          </div>
          <SlOptions size={20} className="text-gray-500 ml-4" />
        </div>
        <div className="bg-gray-100 py-3 px-8 flex gap-4 items-center mb-3 cursor-pointer">
          <FaRegFileAlt size={25} className="text-sky-500" />
          <div className="flex flex-col">
            <p className="text-gray-600 text-md font-medium">Visual Designer</p>
            <p className="text-gray-400 text-sm">4.3MB</p>
          </div>
          <SlOptions size={20} className="text-gray-500 ml-4" />
        </div>
        {/* CV START */}

        <div className="flex justify-center border border-dashed border-gray-900/25 px-20 py-3 bg-gray-50">
          <div className="flex items-center gap-3">
            <IoMdAddCircleOutline size={30} className="text-sky-500" />
            <div className="flex flex-col text-sm text-gray-500">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-sky-500 focus-within:outline-none hover:text-sky-600"
              >
                <span className="w-full bg-gray-50">Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="w-full">or drag and drop</p>
            </div>
          </div>
        </div>
        {/* CV END */}
      </div>
    </div>
  );
}

export default PersonalSetting;
