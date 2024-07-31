"use client";

import React, { useState } from "react";

import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";

function Filters({
  selectShowBy,
  handleSelectShowBy,
  handleApplyFilter,
  appliedFilters,
}: {
  selectShowBy: string[];
  handleSelectShowBy: (value: string) => void;
  handleApplyFilter: (value: string) => void;
  appliedFilters: string[];
}) {
  const [showByExpanded, setShowByExpanded] = useState(true);
  const [locationExpanded, setLocationExpanded] = useState(false);
  const [salaryExpanded, setSalaryExpanded] = useState(false);
  const [jobTypeExpanded, setJobTypeExpanded] = useState(true);
  const [experienceExpanded, setExperienceExpanded] = useState(false);
  const [workTypeExpanded, setWorkTypeExpanded] = useState(true);
  const [employmentTypeExpanded, setEmploymentTypeExpanded] = useState(false);

  return (
    <div className="mt-4 bg-white rounded-lg flex-col divide-y">
      {/* SHOW BY */}
      <div className="flex flex-col">
        <div
          className="flex items-center justify-between p-4"
          onClick={() => setShowByExpanded(!showByExpanded)}
        >
          <h4 className="text-sm">Show By</h4>
          {showByExpanded ? (
            <IoChevronUp className="" size={25} />
          ) : (
            <IoChevronDown className="" size={25} />
          )}
        </div>
        {showByExpanded && (
          <div className="flex px-4 mb-3">
            <p
              onClick={() => {
                handleSelectShowBy("New Jobs");
              }}
              className={
                "text-[12px] border-1 px-3 py-1 rounded-lg mr-2 cursor-pointer border border-grey-400 bg-grey-200" +
                (selectShowBy.includes("New Jobs") &&
                  "border-green-400 bg-green-100")
              }
            >
              New Jobs
            </p>
            <p
              onClick={() => {
                handleSelectShowBy("Most Suitable");
              }}
              className={
                "text-[12px] border-1 px-3 py-1 rounded-lg mr-2 cursor-pointer border border-grey-400 bg-grey-200" +
                (selectShowBy.includes("Most Suitable") &&
                  "border-green-400 bg-green-100")
              }
            >
              Most Suitable
            </p>
          </div>
        )}
      </div>
      {/* LOCATION */}
      <div className="flex flex-col">
        <div
          className="flex items-center justify-between p-4"
          onClick={() => setLocationExpanded(!locationExpanded)}
        >
          <h4 className=" text-sm">Location</h4>
          {locationExpanded ? (
            <IoChevronUp className="" size={25} />
          ) : (
            <IoChevronDown className="" size={25} />
          )}
        </div>
        {locationExpanded && (
          <fieldset>
            <div className="flex flex-col">
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Addis Ababa, Ethiopia")}
                    id="add"
                    name="add"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Addis Ababa, Ethiopia")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label htmlFor="add" className="font-medium text-gray-600">
                    Addis Ababa, Ethiopia
                  </label>
                </div>
              </div>
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("New York, USA")}
                    id="nyc"
                    name="nyc"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("New York, USA")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label htmlFor="nyc" className="font-medium text-gray-600">
                    New York, USA
                  </label>
                </div>
              </div>
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Moscow, Russia")}
                    id="moscow"
                    name="moscow"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Moscow, Russia")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label htmlFor="moscow" className="font-medium text-gray-600">
                    Moscow, Russia
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        )}
      </div>
      {/* SALARY */}
      <div className="flex flex-col">
        <div
          className="flex items-center justify-between p-4"
          onClick={() => setSalaryExpanded(!salaryExpanded)}
        >
          <h4 className=" text-sm">Salary</h4>
          {salaryExpanded ? (
            <IoChevronUp className="" size={25} />
          ) : (
            <IoChevronDown className="" size={25} />
          )}
        </div>
        {salaryExpanded && (
          <div className="flex flex-col px-4 gap-2 mb-3">
            <div className="flex grid grid-cols-5 items-center">
              <label className="text-[12px] text-gray-600 col-span-1">
                $ Min
              </label>
              <input
                type="number"
                className="border border-gray-300 rounded px-2 py-1 col-span-4 outline-none text-[12px]"
              />
            </div>
            <div className="flex grid grid-cols-5 items-center">
              <label className="text-[12px] text-gray-600 col-span-1">
                $ Max
              </label>
              <input
                type="number"
                className="border border-gray-300 rounded px-2 py-1 col-span-4 outline-none text-[12px]"
              />
            </div>
          </div>
        )}
      </div>
      {/* Job Type */}
      <div className="flex flex-col">
        <div
          className="flex items-center justify-between p-4"
          onClick={() => setJobTypeExpanded(!jobTypeExpanded)}
        >
          <h4 className="text-sm">Job Type</h4>
          {jobTypeExpanded ? (
            <IoChevronUp className="" size={25} />
          ) : (
            <IoChevronDown className="" size={25} />
          )}
        </div>
        {jobTypeExpanded && (
          <fieldset>
            <div className="flex flex-col">
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Full-Time")}
                    id="fullTime"
                    name="fullTime"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Full-Time")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label
                    htmlFor="fullTime"
                    className="font-medium text-gray-600"
                  >
                    Full-Time
                  </label>
                </div>
              </div>
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Freelance")}
                    id="freelance"
                    name="freelance"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Freelance")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label
                    htmlFor="freelance"
                    className="font-medium text-gray-600"
                  >
                    Freelance
                  </label>
                </div>
              </div>
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Internship")}
                    id="internship"
                    name="internship"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Internship")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label
                    htmlFor="internship"
                    className="font-medium text-gray-600"
                  >
                    Internship
                  </label>
                </div>
              </div>
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Volunteer")}
                    id="volunteer"
                    name="volunteer"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Volunteer")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label
                    htmlFor="volunteer"
                    className="font-medium text-gray-600"
                  >
                    Volunteer
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        )}
      </div>
      {/* Experience */}
      <div className="flex flex-col">
        <div
          className="flex items-center justify-between p-4"
          onClick={() => setExperienceExpanded(!experienceExpanded)}
        >
          <h4 className=" text-sm">Experience</h4>
          {experienceExpanded ? (
            <IoChevronUp className="" size={25} />
          ) : (
            <IoChevronDown className="" size={25} />
          )}
        </div>
        {experienceExpanded && (
          <fieldset>
            <div className="flex flex-col">
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Entry Level")}
                    id="entry"
                    name="entry"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Entry Level")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label htmlFor="entry" className="font-medium text-gray-600">
                    Entry Level
                  </label>
                </div>
              </div>
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Junior Level")}
                    id="junior"
                    name="junior"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Junior Level")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label htmlFor="junior" className="font-medium text-gray-600">
                    Junior Level
                  </label>
                </div>
              </div>
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Intermediate Level")}
                    id="intermediate"
                    name="intermediate"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Intermediate Level")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label
                    htmlFor="intermediate"
                    className="font-medium text-gray-600"
                  >
                    Intermediate Level
                  </label>
                </div>
              </div>
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Senior Level")}
                    id="senior"
                    name="senior"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Senior Level")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label htmlFor="senior" className="font-medium text-gray-600">
                    Senior Level
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        )}
      </div>
      {/* Work Type */}
      <div className="flex flex-col">
        <div
          className="flex items-center justify-between p-4"
          onClick={() => setWorkTypeExpanded(!workTypeExpanded)}
        >
          <h4 className=" text-sm">Work Type</h4>
          {workTypeExpanded ? (
            <IoChevronUp className="" size={25} />
          ) : (
            <IoChevronDown className="" size={25} />
          )}
        </div>
        {workTypeExpanded && (
          <fieldset>
            <div className="flex flex-col">
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("On-Site")}
                    id="onsite"
                    name="onsite"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("On-Site")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label htmlFor="onsite" className="font-medium text-gray-600">
                    On-Site
                  </label>
                </div>
              </div>
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Remote")}
                    id="remote"
                    name="remote"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Remote")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label htmlFor="remote" className="font-medium text-gray-600">
                    Remote
                  </label>
                </div>
              </div>
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Hybrid")}
                    id="hybrid"
                    name="hybrid"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Hybrid")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label htmlFor="hybrid" className="font-medium text-gray-600">
                    Hybrid
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        )}
      </div>
      {/* Employment Type */}
      <div className="flex flex-col">
        <div
          className="flex items-center justify-between p-4"
          onClick={() => setEmploymentTypeExpanded(!employmentTypeExpanded)}
        >
          <h4 className=" text-sm">Employment Type</h4>
          {employmentTypeExpanded ? (
            <IoChevronUp className="" size={25} />
          ) : (
            <IoChevronDown className="" size={25} />
          )}
        </div>
        {employmentTypeExpanded && (
          <fieldset>
            <div className="flex flex-col">
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Permanent")}
                    id="permanent"
                    name="permanent"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Permanent")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label
                    htmlFor="permanent"
                    className="font-medium text-gray-600"
                  >
                    Permanent
                  </label>
                </div>
              </div>
              <div className="relative flex px-4 mb-3 gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    checked={appliedFilters.includes("Contract")}
                    id="contract"
                    name="contract"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-gray-300 accent-green-600"
                    onChange={() => handleApplyFilter("Contract")}
                  />
                </div>
                <div className="text-[12px] leading-6">
                  <label
                    htmlFor="contract"
                    className="font-medium text-gray-600"
                  >
                    Contract
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        )}
      </div>
    </div>
  );
}

export default Filters;
