import React from "react";
import JobCard from "./JobCard";

function JobList({
  jobs,
  handleSelectJob,
  selectedJob,
}: {
  jobs: any[];
  handleSelectJob: (id: number) => void;
  selectedJob: number;
}) {
  return (
    <div className="flex flex-col gap-y-4 rounded-lg">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          handleSelectJob={handleSelectJob}
          selectedJob={selectedJob}
        />
      ))}
    </div>
  );
}

export default JobList;
