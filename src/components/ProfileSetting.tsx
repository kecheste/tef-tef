import React from "react";

function ProfileSetting() {
  return (
    <div className="pt-2 flex flex-col w-full gap-4 min-h-screen">
      <div className="flex items-center gap-4 mt-4">
        <div className="w-full">
          <label
            htmlFor="country"
            className="block text-sm leading-6 text-gray-600"
          >
            Nationality
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              className="w-full rounded-md border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm sm:text-sm sm:leading-6 outline-none"
            >
              <option>Ethiopia</option>
              <option>United States</option>
              <option>Canada</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="country"
            className="block text-sm leading-6 text-gray-600"
          >
            Date of Birth
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
      <div className="flex items-center gap-4 mt-4">
        <div className="w-full">
          <label
            htmlFor="country"
            className="block text-sm leading-6 text-gray-600"
          >
            Gender
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              className="w-full rounded-md border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm sm:text-sm sm:leading-6 outline-none"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="country"
            className="block text-sm leading-6 text-gray-600"
          >
            Marital Status
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              className="w-full rounded-md border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm sm:text-sm sm:leading-6 outline-none"
            >
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
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
              <option>Degree</option>
              <option>Masters</option>
            </select>
          </div>
        </div>
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
              <option>Junior</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <div className="w-full">
          <label
            htmlFor="country"
            className="block text-sm leading-6 text-gray-600"
          >
            Biography
          </label>
          <div className="mt-2">
            <textarea
              cols={5}
              rows={5}
              placeholder="Write down your biography here, let the world know who you are."
              name="first-name"
              id="first-name"
              className="rounded-md w-full border border-gray-300 py-1.5 text-gray-700 px-3 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-sky-500 hover:bg-sky-600 text-sm font-medium py-3 px-6 rounded-md text-white">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ProfileSetting;
