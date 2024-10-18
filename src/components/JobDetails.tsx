import Image from "next/image";
import React from "react";

import { IoBookmark } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import Link from "next/link";

function JobDetails({ job }: { job: any }) {
  return (
    <div className="flex-col bg-white divide-y">
      <div className="flex flex-col items-center mb-8 pt-6">
        <Image src={job.image} alt="logo" width={80} height={80} />
        <h4 className="text-lg font-semibold mt-3">{job.title}</h4>
        <p className="text-sky-500 text-md font-medium">{job.company}</p>
      </div>
      <div className="p-4 text-sm">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-start col-span-1">
            <p className="text-md text-gray-500">Job Type</p>
            <p className="text-md">{job.job_type}</p>
          </div>
          <div className="flex flex-col items-start col-span-1">
            <p className="text-md text-gray-500">Work Type</p>
            <p className="text-md">{job.work_type}</p>
          </div>
          <div className="flex flex-col items-start col-span-1">
            <p className="text-md text-gray-500">Location</p>
            <p className="text-md">{job.location}</p>
          </div>
          <div className="flex flex-col items-start col-span-1">
            <p className="text-md text-gray-500">Experience</p>
            <p className="text-md">{job.experience}</p>
          </div>
          <div className="flex flex-col items-start col-span-1">
            <p className="text-md text-gray-500">Salary</p>
            <p className="text-md">{job.salary}</p>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col">
        <div>
          <h4 className="font-medium text-md">Description</h4>
          <ul className="list-disc text-sm py-1 px-6 text-gray-500">
            {job.description.map((desc: string) => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-md">Requirement</h4>
          <ul className="list-disc text-sm py-1 px-6 text-gray-500">
            {job.requirement.map((requirement: string) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex p-6 items-center">
        <Link
          href="proposals/1234"
          className="bg-sky-500 text-center hover:bg-sky-600 text-white py-3 w-3/4 rounded-xl text-sm font-medium"
        >
          Apply Now
        </Link>
        <div className="border border-sky-400 p-2 rounded-lg ml-3 cursor-pointer">
          <IoBookmark className="cursor-pointer text-sky-500" size={25} />
        </div>
        <div className="border border-sky-400 p-2 rounded-lg ml-3 cursor-pointer">
          <LuSend size={25} className="cursor-pointer text-sky-500" />
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
