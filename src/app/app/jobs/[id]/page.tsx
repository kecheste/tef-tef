import Image from "next/image";
import React from "react";

import { CiBookmark } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { BsCalendarDate } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";

function page() {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-200 w-full px-40 py-5">
        <p className="text-gray-700 text-lg font-medium">Job Details</p>
      </div>
      <div className="flex flex-col mx-40 px-4 mt-4 rounded-lg py-5 bg-white">
        <div className="flex items-center justify-between px-8">
          <div className="flex items-center">
            <Image
              src="/facebook.png"
              alt="facebook"
              height={100}
              width={100}
              className="h-[70px] w-[70px] object-cover rounded-full"
            />
            <div className="ml-4 flex flex-col gap-2">
              <h2 className="text-lg">Senior UX Designer</h2>
              <div className="flex items-center gap-3">
                <p className="text-md text-gray-500">at Facebook</p>
                <p className="bg-sky-500 text-sm text-white px-3 py-1 rounded-sm">
                  FULL-TIME
                </p>
                <p className="bg-orange-200 text-sm px-3 py-1 text-orange-600 rounded-xl">
                  Featured
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <CiBookmark
              size={40}
              className="bg-sky-100 p-2 rounded-sm text-sky-600"
            />
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-2 rounded-sm">
              <div className="flex items-center gap-1">
                <p>Apply Now</p>
                <IoIosArrowRoundForward size={20} color="white" />
              </div>
            </button>
          </div>
        </div>
        <div className="flex w-full mt-4 px-8">
          <div className="flex flex-col mt-8">
            <p className="text-md font-medium text-gray-600 mb-4">
              Job Description
            </p>
            <p className="text-sm text-gray-500">
              This position is a Motorola Solutions Region Software Specialist
              for the CommandCentral AWARE System, based in Florida. The
              Software Specialist will be responsible for supporting various
              customer functions and products that are part of the Motorola
              CommandCentral AWARE Deployment, related services, and interfaces.
              The Software Specialist builds and maintains positive, effective,
              and mutually beneficial working alliances with the customers
              within their territory; initiates problem solving action and
              follows through to resolution; executes customer operations
              policies and procedures for the Real Time Crime Center (RTCC).
            </p>
            <p className="text-md font-medium text-gray-600 mt-8 mb-4">
              Requirements
            </p>
            <ul className="list-disc text-sm text-gray-500 ml-8">
              <li>
                Provides tailored technical customer operations support and
                consulting for customers’ CommandCentral AWARE system, related
                services and interfaces
              </li>
              <li>
                Develops strategies for implementing operational efficiencies by
                reviewing work flows, procedures, and performance
              </li>
              <li>
                Work virtually with or travel to sites around the country to
                provide assistance with SOP creation and process discovery,
                demonstrate tool capabilities, and navigate agreements for
                inter-jurisdictional data sharing.
              </li>
              <li>
                Assist customers with their vendors and partners to connect data
                points within their CommandCentral AWARE instance.
              </li>
              <li>Executes customer operations policies and procedures</li>
              <li>Assists in the testing and execution of new builds</li>
              <li>
                Navigate various data input connections (video, location
                services, etc), and work with site personnel to successfully
                bring these elements into the customers CommandCentral AWARE
                instance.
              </li>
              <li>
                Runs diagnostics; runs system performance and requirements
                analysis
              </li>
              <li>
                Builds and maintains positive, effective, and mutually
                beneficial-working alliances with customers, their vendors, and
                surrounding jurisdictions
              </li>
              <li>
                Initiates problem solving action and follows through to
                resolution
              </li>
              <li>
                Performs root-cause analysis of problems to formulate and
                recommend improved alternative operations
              </li>
              <li>Leads process improvement initiatives</li>
              <li>
                Assists with administrative functions for the CommandCentral
                AWARE solution
              </li>
              <li>
                Basic network, infrastructure, and MSSQL database knowledge will
                contribute to a successful position.
              </li>
            </ul>
          </div>
          <div className="flex flex-col pl-10 ml-10 gap-4">
            <div className="border border-gray-300 flex items-center divide-x p-4">
              <div className="flex flex-col gap-2 mx-10 min-w-40">
                <p className="text-sm text-gray-700">Salary(USD)</p>
                <p className="text-md text-sky-500 w-full">
                  $100,000 - $120,000
                </p>
                <p className="text-[13px] text-gray-400">Yearly salary</p>
              </div>
              <div className="flex flex-col items-center mx-10 pl-10 gap-2 min-w-48">
                <GrMapLocation size={40} className="text-sky-500" />
                <p className="text-sm text-gray-700 w-full">Job Location</p>
                <p className="text-sm text-gray-400 w-full">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="border border-gray-300 flex flex-col p-4">
              <p className="mb-2">Job Benefits</p>
              <div className="flex flex-wrap gap-2">
                <p className="text-sky-500 bg-gray-100 rounded-sm px-3 text-sm py-1">
                  401k Salary
                </p>
                <p className="text-sky-500 bg-gray-100 rounded-sm px-3 text-sm py-1">
                  Async
                </p>
                <p className="text-sky-500 bg-gray-100 rounded-sm px-3 text-sm py-1">
                  Learning budget
                </p>
                <p className="text-sky-500 bg-gray-100 rounded-sm px-3 text-sm py-1">
                  Vision Insurance
                </p>
                <p className="text-sky-500 bg-gray-100 rounded-sm px-3 text-sm py-1">
                  4 day workweek
                </p>
                <p className="text-sky-500 bg-gray-100 rounded-sm px-3 text-sm py-1">
                  Profit Sharing
                </p>
                <p className="text-sky-500 bg-gray-100 rounded-sm px-3 text-sm py-1">
                  Free gym membership
                </p>
                <p className="text-sky-500 bg-gray-100 rounded-sm px-3 text-sm py-1">
                  Equity Compensation
                </p>
                <p className="text-sky-500 bg-gray-100 rounded-sm px-3 text-sm py-1">
                  No politics at work
                </p>
              </div>
            </div>

            <div className="border border-gray-300 flex flex-col p-4">
              <p className="mb-4">Job Overview</p>
              <div className="flex flex-wrap gap-16 ml-4">
                <div className="flex flex-col gap-1">
                  <BsCalendarDate size={30} className="text-sky-500" />
                  <p className="text-sm text-gray-500">JOB POSTED</p>
                  <p className="text-sm text-gray-700 font-medium">
                    14 Jun, 2021
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <CiTimer size={30} className="text-sky-500" />
                  <p className="text-sm text-gray-500">JOB EXPIRE IN</p>
                  <p className="text-sm text-gray-700 font-medium">
                    14 Aug, 2021
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <SiLevelsdotfyi size={30} className="text-sky-500" />
                  <p className="text-sm text-gray-500">JOB LEVEL</p>
                  <p className="text-sm text-gray-700 font-medium">
                    Entry Level
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <MdOutlineWorkHistory size={30} className="text-sky-500" />
                  <p className="text-sm text-gray-500">EXPERIENCE</p>
                  <p className="text-sm text-gray-700 font-medium">
                    $50k-80k/month
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <IoBookOutline size={30} className="text-sky-500" />
                  <p className="text-sm text-gray-500">EDUCATION</p>
                  <p className="text-sm text-gray-700 font-medium">GRADUATE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
