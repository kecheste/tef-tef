import React from "react";

import { RxCross1 } from "react-icons/rx";

function AppliedFilters({
  appliedFilters,
  handleApplyFilter,
  deleteAllFilters,
}: {
  appliedFilters: string[];
  handleApplyFilter: (filter: string) => void;
  deleteAllFilters: () => void;
}) {
  if (appliedFilters.length === 0) return <div className="mt-2"></div>;
  return (
    <div className="flex flex-wrap items-center mt-4 text-sm">
      {appliedFilters.map((filter) => (
        <div
          key={filter}
          className="flex items-center text-sm px-4 py-1.5 border border-gray-300 bg-white rounded-lg mr-3 mb-2"
        >
          <p className=" mr-2">{filter}</p>
          <RxCross1
            size={15}
            onClick={() => handleApplyFilter(filter)}
            className="cursor-pointer"
          />
        </div>
      ))}
      <button onClick={deleteAllFilters} className="text-red-600 font-medium">
        Delete All
      </button>
    </div>
  );
}

export default AppliedFilters;
