import React from "react";
import JobRow from "./JobRow";

const Jobs = () => {
  return (
    <section className=" bg-gray-100 py-4 rounded-xl">
      <div className=" container mx-auto">
        <h2 className=" font-bold mb-4">Recent Jobs</h2>
        <div className="flex flex-col gap-4">
          <JobRow />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
