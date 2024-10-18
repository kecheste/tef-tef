"use client";

import AccountSetting from "@/components/AccountSetting";
import PersonalSetting from "@/components/PersonalSetting";
import ProfileSetting from "@/components/ProfileSetting";
import SocialSetting from "@/components/SocialSetting";
import React, { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoBookmarkOutline, IoPersonOutline } from "react-icons/io5";
import {
  MdLogout,
  MdOutlineDashboard,
  MdOutlineNotifications,
  MdOutlineSettings,
} from "react-icons/md";
import { PiBagSimpleBold } from "react-icons/pi";

function Page() {
  const [selected, setSelected] = useState("personal");

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return (
    <div className="mx-40 bg-white grid grid-cols-8 p-8 divide-x mt-8 rounded-lg">
      <div className="col-span-2 ml-10">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col mt-8">
            <div className="flex gap-3 items-center py-2 pl-4 hover:bg-sky-50">
              <MdOutlineDashboard size={25} className="text-gray-500" />
              <p className="text-gray-500">Overview</p>
            </div>
            <div className="flex gap-3 items-center py-2 pl-4 hover:bg-sky-50">
              <PiBagSimpleBold size={25} className="text-gray-500" />
              <p className="text-gray-500">Applied Jobs</p>
            </div>
            <div className="flex gap-3 items-center py-2 pl-4 hover:bg-sky-50">
              <IoBookmarkOutline size={25} className="text-gray-500" />
              <p className="text-gray-500">Favorite Jobs</p>
            </div>
            <div className="flex gap-3 items-center py-2 pl-4 hover:bg-sky-50">
              <MdOutlineNotifications size={25} className="text-gray-500" />
              <p className="text-gray-500">Job Alert</p>
            </div>
            <div className="flex gap-3 items-center pl-4 border-l-4 py-2 border-sky-500 bg-sky-100">
              <MdOutlineSettings size={25} className="text-sky-500" />
              <p className="text-sky-500">Setting</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdLogout size={25} className="text-gray-500" />
            <p className="text-gray-500">Log-out</p>
          </div>
        </div>
      </div>
      <div className="col-span-6 pl-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-medium text-gray-700">Setting</h2>
          <div className="flex flex-col divide-y">
            <div className="flex items-center gap-12 pb-4">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleSelect("personal")}
              >
                <GoPerson
                  size={25}
                  className={
                    selected === "personal" ? "text-sky-500" : "text-gray-500"
                  }
                />
                <p
                  className={
                    selected === "personal" ? "text-sky-500" : "text-gray-500"
                  }
                >
                  Personal
                </p>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleSelect("profile")}
              >
                <IoPersonOutline
                  size={25}
                  className={
                    selected === "profile" ? "text-sky-500" : "text-gray-500"
                  }
                />
                <p
                  className={
                    selected === "profile" ? "text-sky-500" : "text-gray-500"
                  }
                >
                  Profile
                </p>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleSelect("social")}
              >
                <CiGlobe
                  size={25}
                  className={
                    selected === "social" ? "text-sky-500" : "text-gray-500"
                  }
                />
                <p
                  className={
                    selected === "social" ? "text-sky-500" : "text-gray-500"
                  }
                >
                  Social Links
                </p>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleSelect("account")}
              >
                <MdOutlineSettings
                  size={25}
                  className={
                    selected === "account" ? "text-sky-500" : "text-gray-500"
                  }
                />
                <p
                  className={
                    selected === "account" ? "text-sky-500" : "text-gray-500"
                  }
                >
                  Account Setting
                </p>
              </div>
            </div>
            {selected === "personal" && <PersonalSetting />}
            {selected === "profile" && <ProfileSetting />}
            {selected === "social" && <SocialSetting />}
            {selected === "account" && <AccountSetting />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
