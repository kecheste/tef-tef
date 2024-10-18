"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineSettings } from "react-icons/md";

function AllMessages() {
  const [messages, setMessages] = useState([
    {
      id: 0,
      name: "Jimmy Sullivan",
      message: "Hey! How are you?",
      image: "/profile.jpg",
    },
    {
      id: 1,
      name: "Adora Nwankwo",
      message: "Can you deliver in 2 days?",
      image: "/profile1.jpg",
    },
    {
      id: 2,
      name: "Benjamin Okoro",
      message: "I have a lot of work to do, sorry.",
      image: "/profile2.jpg",
    },
    {
      id: 3,
      name: "Jimmy Sullivan",
      message: "Hey! How are you?",
      image: "/profile.jpg",
    },
    {
      id: 4,
      name: "Adora Nwankwo",
      message: "Can you deliver in 2 days?",
      image: "/profile1.jpg",
    },
    {
      id: 5,
      name: "Benjamin Okoro",
      message: "I have a lot of work to do, sorry.",
      image: "/profile2.jpg",
    },
  ]);
  const [selectedMessage, setSelectedMessage] = useState<number>(0);

  const handleSelectMessage = (id: number) => {
    setSelectedMessage(id);
  };

  return (
    <div className="bg-white rounded-lg p-6 text-sm">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">All messages</p>
          <MdOutlineSettings size={20} />
        </div>
        {/* MESSAGE CARD */}
        <div className="flex flex-col gap-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={
                "flex items-center rounded-lg py-1.5 px-2 cursor-pointer " +
                (selectedMessage === message.id
                  ? " bg-sky-500 hover:bg-sky-400"
                  : "bg-gray-50 hover:bg-gray-100")
              }
              onClick={() => handleSelectMessage(message.id)}
            >
              <div>
                <Image
                  src={message.image}
                  alt="profile"
                  width={50}
                  height={50}
                  className="rounded-full object-cover w-[50px] h-[50px] shadow-lg"
                />
              </div>
              <div className="flex flex-col ml-3">
                <p
                  className={
                    "font-medium text-md " +
                    (selectedMessage === message.id
                      ? " text-white"
                      : " text-gray-800")
                  }
                >
                  {message.name}
                </p>
                <p
                  className={
                    "text-[12px] " +
                    (selectedMessage === message.id
                      ? "text-gray-200"
                      : "text-gray-500")
                  }
                >
                  {message.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllMessages;
