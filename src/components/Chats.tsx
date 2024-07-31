"use client";

import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { ImAttachment } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";
import Image from "next/image";

function Chats() {
  const [chats, setChats] = useState([
    {
      id: 1,
      message: "No rush though. We still have to wait for the HiFi Designs.",
      image: "/profile.jpg",
      self: false,
    },
    {
      id: 2,
      message: "Sure thing.",
      image: "/profile.jpg",
      self: true,
    },
    {
      id: 3,
      message: "Tell me if there is something new",
      image: "/profile.jpg",
      self: false,
    },
    {
      id: 4,
      message: "Okay I will let you know",
      image: "/profile.jpg",
      self: true,
    },
  ]);

  return (
    <div className="bg-white rounded-lg flex flex-col divide-y text-sm">
      <div className="flex justify-between items-center px-8 py-3">
        <p className="text-lg font-medium">Next Js project</p>
        <div className="flex items-center">
          <div className="border border-1 border-gray-300 rounded-md mr-2 p-2 cursor-pointer hover:bg-gray-100">
            <IoCallOutline size={20} className="text-gray-500" />
          </div>
          <div className="border border-1 border-gray-300 rounded-md mr-2 p-2 cursor-pointer hover:bg-gray-100">
            <IoVideocamOutline size={20} className="text-gray-500" />
          </div>
          <div className="border border-1 border-gray-300 rounded-md mr-2 p-2 cursor-pointer hover:bg-gray-100">
            <CiSearch size={20} className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="h-[65vh] overflow-y-scroll pr-1 flex flex-col pt-6 gap-3 text-sm">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={
              chat.self
                ? "flex gap-4 px-8 items-center self-end"
                : "flex gap-4 px-8 items-center"
            }
          >
            {chat.self ? (
              ""
            ) : (
              <Image
                src={chat.image}
                width={60}
                height={60}
                alt="profile"
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
            )}
            <p
              className={
                chat.self
                  ? "px-4 py-2 text-[12px] rounded-md bg-sky-500 text-white"
                  : "px-4 py-2 text-[12px] rounded-md bg-gray-200 text-gray-800"
              }
            >
              {chat.message}
            </p>
          </div>
        ))}
      </div>
      <div className="px-8 mt-2 pt-2 bg-white mb-4">
        <div className="flex flex-col rounded-xl border border-gray-300 px-2">
          <textarea
            rows={2}
            className="outline-none my-1 resize-none rounded-sm px-2 py-1 text-gray-500"
            placeholder="Type a message"
          />
          <div className="flex self-end my-2">
            <div className="flex items-center justify-between w-[140px]">
              <ImAttachment size={22} className="text-gray-500" />
              <BsEmojiSmile size={22} className="text-gray-500" />
              <button className="outline-none bg-black text-white font-medium text-sm px-4 py-2 rounded-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
