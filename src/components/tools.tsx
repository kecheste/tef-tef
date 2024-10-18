import React from "react";
import InputField from "./inputField";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

function Tools() {
  return (
    <div className="flex px-20 py-2 items-center justify-between border-b bg-white text-sm">
      <div className="flex items-center divide-x gap-10">
        <h2 className="text-lg text-black ">History</h2>
        <div className="flex flex-col pl-5">
          <p className="text-lg text-black">UI/UX Designer</p>
          <div className="flex items-center mt-1">
            <p className="text-sm text-sky-500">All Location</p>
            <p className="text-sm text-black border border-green-400 rounded-xl px-2 bg-green-100 ml-4">
              14 new
            </p>
          </div>
        </div>
        <div className="flex flex-col pl-5">
          <p className="text-lg text-black">Video Editor</p>
          <div className="flex items-center mt-1">
            <p className="text-sm text-sky-500">Addis Ababa</p>
            <p className="text-sm text-black border border-green-400 rounded-xl px-2 bg-green-100 ml-4">
              6 new
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <InputField
          label=""
          icon={<CiSearch color="black" size={20} />}
          placeholder="UI/UX Designer"
        />

        <InputField
          label=""
          placeholder="Addis Ababa"
          icon={<IoLocationOutline color="black" size={20} />}
        />
        <button className="bg-sky-500 text-sm text-white px-4 py-2 rounded-xl outline-none hover:bg-sky-600">
          Find Jobs
        </button>
      </div>
    </div>
  );
}

export default Tools;
