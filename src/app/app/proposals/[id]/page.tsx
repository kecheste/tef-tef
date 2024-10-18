import React from "react";
import { SiLevelsdotfyi } from "react-icons/si";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

function page() {
  return (
    <div className="mx-40 rounded-lg bg-white mt-4 p-10 flex flex-col">
      <h1 className="text-2xl font-medium">Submit a proposal</h1>
      <div className="border border-gray-400 flex flex-col mt-8 rounded-lg p-8 divide-y">
        <div className="flex flex-col gap-8">
          <h2 className="text-xl">Job details</h2>
          <div className="flex divide-x">
            <div className="flex flex-col gap-4">
              <p className="text-lg">Frontend Engineer (Remote) </p>
              <div className="flex items-center">
                <p className="rounded-2xl text-gray-700 bg-gray-200 px-4 py-1">
                  Front-End Development
                </p>
                <p className="text-sm text-gray-500 ml-4">
                  Posted Jul 31, 2024
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-8">
                TL;DR Salary: 25.000€-35.000€ per year Type: Full remote Working
                hours: 35h/week (9 to 5, Lisbon time) Area: Anti-money
                laundering and terrorism financing About us Corruption, money
                laundering and terrorism greatly impoverish society and threaten
                democracy. At PEPData, we help companies and regulators through
                simplification and automation of everything related with
                compliance and bureaucracy. We are one of the key national
                players and we are very proud to be able to contribute for a
                better society. About the position At PEPData, we are
                continuously improving our frontend and we are looking for
                someone who really enjoys to build simple, intuitive and
                beautiful apps. This means that you would help us to define and
                maintain great standards and processes for the rest of the team
                to follow. This also means that you will be required to do a bit
                of everything (frontend development related). If you just like
                to code based on a pre-drawn wireframe, this job is probably not
                what you are looking for.
              </p>
            </div>
            <div className="flex flex-col ml-32 pl-10 pr-32">
              <div className="flex items-center w-full">
                <SiLevelsdotfyi size={18} />
                <div className="flex flex-col">
                  <p className="text-sm ml-6">Intermediate</p>
                  <p className="text-[13px] ml-6 w-full">Experience level</p>
                </div>
              </div>
              <div className="flex items-center w-full mt-4">
                <RiMoneyDollarBoxLine size={18} />
                <div className="flex flex-col">
                  <p className="text-sm ml-6">$2,000</p>
                  <p className="text-[13px] ml-6 w-full">Fixed Price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-8 pt-8">
          <p className="text-lg font-bold">Skills and expertise</p>
          <div className="flex">
            <p className="text-gray-500 bg-gray-200 rounded-2xl px-3 py-1 mr-4 text-sm">
              React
            </p>
            <p className="text-gray-500 bg-gray-200 rounded-2xl px-3 py-1 text-sm">
              English
            </p>
          </div>
        </div>
      </div>

      {/* Cover Letter */}

      <div className="border border-gray-400 flex flex-col mt-16 rounded-lg px-8 py-4">
        <h2 className="text-xl mb-4">Cover Letter</h2>
        <textarea
          cols={10}
          rows={10}
          className="outline-none border border-gray-200 px-4 py-2 rounded-lg text-gray-600"
        />

        <h2 className="text-lg mt-4 mb-4">Attachements</h2>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-sky-600 focus-within:outline-none hover:text-sky-500"
              >
                <span className="outline-none">Upload</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only outline-none"
                />
              </label>
              <p className="pl-1"> project files</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 my-2">
          You may attach up to 10 files under the size of 25 MB each. Include
          work samples or other documents to support your application. Do not
          attach your resume — your Upwork profile is automatically forwarded to
          the client with your proposal.
        </p>
      </div>
      <div className="flex items-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-8 py-2">
          Submit proposal
        </button>
        <button className="text-sky-600 ml-8 text-lg">Cancel</button>
      </div>
    </div>
  );
}

export default page;
