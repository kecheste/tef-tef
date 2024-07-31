"use client";

import React, { useState } from "react";
import Filters from "./Filters";
import JobList from "./JobList";
import JobDetails from "./JobDetails";
import AppliedFilters from "./AppliedFilters";

function Body() {
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const [selectShowBy, setSelectShowBy] = useState<string[]>([]);
  const [selectedJob, setSelectedJob] = useState<number>(0);
  const [jobs, setJobs] = useState([
    {
      id: 0,
      title: "UI/UX Designer",
      company: "Instagram",
      location: "Addis Ababa, Ethiopia",
      experience: "2-3 years",
      salary: "$2,000 - $3,000",
      posted: "10 mins ago",
      image: "/instagram.png",
      description: [
        "Create and render design concepts for existing and new products",
        "Work with marketing team to create materials that highlight product features and benefits",
      ],
      requirement: [
        "Design Skills: Experience in designing in Figma",
        "Academics: Attained qualifications in Product Design, HCI, Graphics Design or related field",
        "Communication Skills: You show great motivation to help your peers and are not afraid of raising your hand if needed",
      ],
      work_type: "On-Site",
      job_type: "Freelance",
    },
    {
      id: 1,
      title: "Frontend Developer",
      company: "Facebook",
      location: "Nairobi, Kenya",
      salary: "$3,000 - $4,000",
      experience: "3-4 years",
      posted: "20 mins ago",
      image: "/facebook.png",
      description: [
        "Develop and maintain the front end of web applications",
        "Collaborate with backend developers to integrate user-facing elements",
      ],
      requirement: [
        "Technical Skills: Proficiency in HTML, CSS, JavaScript, and React.js",
        "Academics: Degree in Computer Science or related field",
        "Experience: Experience in building responsive and dynamic web applications",
      ],
      work_type: "Hybrid",
      job_type: "Full-Time",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Twitter",
      location: "Kampala, Uganda",
      experience: "4-5 years",
      salary: "$4,000 - $5,000",
      posted: "30 mins ago",
      image: "/twitter.png",
      description: [
        "Develop and maintain server-side logic",
        "Ensure high performance and responsiveness of requests from the front end",
      ],
      requirement: [
        "Technical Skills: Proficiency in server-side languages such as Node.js, Python, or Ruby",
        "Academics: Degree in Computer Science or related field",
        "Experience: Experience with database management and API integration",
      ],
      work_type: "Remote",
      job_type: "Internship",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Facebook",
      location: "Nairobi, Kenya",
      salary: "$3,000 - $4,000",
      experience: "3-4 years",
      posted: "20 mins ago",
      image: "/facebook.png",
      description: [
        "Develop and maintain the front end of web applications",
        "Collaborate with backend developers to integrate user-facing elements",
      ],
      requirement: [
        "Technical Skills: Proficiency in HTML, CSS, JavaScript, and React.js",
        "Academics: Degree in Computer Science or related field",
        "Experience: Experience in building responsive and dynamic web applications",
      ],
      work_type: "Hybrid",
      job_type: "Full-Time",
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Twitter",
      location: "Kampala, Uganda",
      experience: "4-5 years",
      salary: "$4,000 - $5,000",
      posted: "30 mins ago",
      image: "/twitter.png",
      description: [
        "Develop and maintain server-side logic",
        "Ensure high performance and responsiveness of requests from the front end",
      ],
      requirement: [
        "Technical Skills: Proficiency in server-side languages such as Node.js, Python, or Ruby",
        "Academics: Degree in Computer Science or related field",
        "Experience: Experience with database management and API integration",
      ],
      work_type: "Remote",
      job_type: "Internship",
    },
  ]);

  const handleSelectShowBy = (value: string) => {
    if (selectShowBy.includes(value)) {
      setSelectShowBy(selectShowBy.filter((item) => item !== value));
      setAppliedFilters(
        appliedFilters.filter((appliedFilter) => appliedFilter !== value)
      );
      return;
    }
    appliedFilters.push(value);
    setAppliedFilters([...appliedFilters]);
    selectShowBy.push(value);
    setSelectShowBy([...selectShowBy]);
  };

  const deleteAllFilters = () => {
    setAppliedFilters([]);
    setSelectShowBy([]);
  };

  const handleSelectJob = (id: number) => {
    setSelectedJob(id);
  };

  const handleApplyFilter = (filter: string) => {
    if (appliedFilters.includes(filter)) {
      setAppliedFilters(appliedFilters.filter((item) => item !== filter));
      return;
    }
    appliedFilters.push(filter);
    setAppliedFilters([...appliedFilters]);
  };

  return (
    <div className="px-40 grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <Filters
          handleSelectShowBy={handleSelectShowBy}
          handleApplyFilter={handleApplyFilter}
          selectShowBy={selectShowBy}
          appliedFilters={appliedFilters}
        />
      </div>
      <div className="col-span-6">
        <div className="flex flex-col gap-3">
          <AppliedFilters
            appliedFilters={appliedFilters}
            handleApplyFilter={handleSelectShowBy}
            deleteAllFilters={deleteAllFilters}
          />
          <JobList
            jobs={jobs}
            handleSelectJob={handleSelectJob}
            selectedJob={selectedJob}
          />
        </div>
      </div>
      <div className="col-span-4">
        <JobDetails job={jobs[selectedJob]} />
      </div>
    </div>
  );
}

export default Body;
