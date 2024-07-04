import React from "react";
import JobRow from "./JobRow";
import { typeJobData } from "../actions/jobAction";

type IProps = {
  header: string;
  jobs: typeJobData[];
  companyName: string;
};

const Jobs = ({ header, jobs, companyName }: IProps) => {
  return (
    <section className=" bg-gray-100 py-4 rounded-3xl">
      <div className=" container mx-auto">
        <h2 className=" font-bold mb-4">{header}</h2>
        <div className="flex flex-col-reverse gap-4">
          {jobs?.map((job) => {
            return (
              <JobRow job={job as typeJobData} companyName={companyName} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
