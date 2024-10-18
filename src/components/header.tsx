"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";

function Header({
  selected,
  handleSelect,
}: {
  selected: string;
  handleSelect: Function;
}) {
  return (
    <div className="flex w-full px-20 items-center justify-between border-b border-grey-200 bg-white text-sm py-1">
      <div className="flex items-center w-[60%]">
        <div className="px-10">
          <Image src="/logo.png" alt="Logo" width={90} height={90} />
        </div>
        <div className="flex items-center pl-10 w-[45%] justify-between">
          <Link
            href="/app/home"
            className={`text-black py-3 ${selected === "home" && "font-bold"}`}
            onClick={() => handleSelect("home")}
          >
            Home
          </Link>
          <Link
            href="/app/findJobs"
            className={`text-black py-3 ${
              selected === "findJobs" && "font-bold"
            }`}
            onClick={() => handleSelect("findJobs")}
          >
            Find Jobs
          </Link>
          <Link
            href="/app/contracts"
            className={`text-black py-3 ${
              selected === "contracts" && "font-bold"
            }`}
            onClick={() => handleSelect("contracts")}
          >
            My Contracts
          </Link>
          <Link
            href="/app/messages"
            className={`text-black py-3 ${
              selected === "messages" && "font-bold"
            }`}
            onClick={() => handleSelect("messages")}
          >
            Messages
          </Link>
        </div>
      </div>
      <div className="flex items-center pr-8 py-2">
        <Link href="notifications" className="text-black p-1 mr-3">
          <IoIosNotificationsOutline size={30} className="text-gray-700" />
        </Link>
        <Link href="savedJobs" className="text-black p-1 mr-4">
          <CiBookmark size={28} className="text-gray-700" />
        </Link>
        <Link className="pr-1" href="freelancers/1234">
          <Image
            alt="profile"
            src="/profile.jpg"
            height={100}
            width={100}
            className="h-[30px] w-[30px] rounded-full bg-cover"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;

{
  /* <div className="flex items-center pr-8 py-2">
        <Link
          href="/notifications"
          className="text-black border border-gray-700 rounded-full p-1 mr-4 hover:bg-gray-100"
        >
          <IoIosNotifications size={20} />
        </Link>
        <div className="flex items-center text-black border-solid border border-sky-400 rounded-md py-1 px-4 hover:bg-sky-50">
          <Link className="pr-1" href="freelancers">
            Abenezer
          </Link>
          <GoArrowRight />
        </div>
      </div> */
}
