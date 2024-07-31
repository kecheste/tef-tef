import AboutInfo from "@/components/AboutInfo";
import AllMessages from "@/components/AllMessages";
import Chats from "@/components/Chats";
import React from "react";

function page() {
  return (
    <div className="grid grid-cols-12 px-40 gap-4 pt-4">
      <div className="col-span-3">
        <AllMessages />
      </div>
      <div className="col-span-6">
        <Chats />
      </div>
      <div className="col-span-3">
        <AboutInfo />
      </div>
    </div>
  );
}

export default page;
