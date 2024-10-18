import React from "react";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { IoIosTimer } from "react-icons/io";

function JobCard({
  job,
  handleSelectJob,
  selectedJob,
}: {
  job: any;
  handleSelectJob: (id: number) => void;
  selectedJob: number;
}) {
  return (
    <div
      className={
        "rounded-lg bg-white flex flex-col divide-y text-sm" +
        (selectedJob === job.id ? " border border-sky-400" : "")
      }
      onClick={() => handleSelectJob(job.id)}
    >
      <div className="flex items-center py-3 px-6 justify-between">
        <div className="flex items-center">
          <Image src={job.image} alt="logo" width={60} height={60} />
          <div className="flex flex-col pl-5 items-start">
            <h4 className="text-lg mb-1">{job.title}</h4>
            <p className="text-sky-500 text-sm font-medium">{job.company}</p>
          </div>
        </div>
        <div className="">
          <IoBookmark className="cursor-pointer text-sky-500" size={25} />
        </div>
      </div>
      <div className="flex flex-col px-6 py-4">
        <div className="flex items-center mb-3">
          <IoLocation size={20} />
          <p className="text-md pl-4">{job.location}</p>
        </div>
        <div className="flex items-center mb-3">
          <RiMoneyDollarBoxLine size={20} />
          <p className="text-md pl-4">{job.salary}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <IoIosTimer size={20} />
            <p className="text-md pl-4 text-gray-500">{job.posted}</p>
          </div>
          <div className="">
            <button className="border border-sky-300 text-sky-700 px-4 py-2 rounded-lg outline-none">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
