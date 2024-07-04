import React from "react";
import { FaHeart } from "react-icons/fa";
import type { typeJobData } from "../actions/jobAction";
import { ReactTimeAgo } from "./ReactTimeAgo";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

type IProps = {
  job: typeJobData;
  companyName?: string;
};
const JobRow = async ({ job, companyName }: IProps) => {
  return (
    <>
      <div className="bg-white p-4 flex gap-4 rounded-lg shadow-sm relative">
        <div className="absolute top-2 right-4 w-fit">
          <FaHeart className="size-4 text-gray-200" />
        </div>
        <div className=" content-center">
          <img
            className=" size-12"
            src={
              job?.iconImage ||
              "https://wallpapers.com/images/hd/cool-profile-picture-minion-13pu7815v42uvrsg.jpg"
            }
            alt="Company Icon"
          />
        </div>
        <div className=" grow">
          <div className="text-gray-500 text-sm capitalize">
            {companyName || "-"}
          </div>
          <div className="font-bold mb-1 text-lg capitalize">
            {job?.jobTitle || "-"}
          </div>
          <div className="text-sm text-gray-400 capitalize">
            {job?.remote || "--"} &middot; {job?.cityName || "--"},{" "}
            {job?.countryName || "--"} &middot; {job?.type || "--"} &middot;
            {job?.admin && <Link href={'/jobs/edit/'+job._id}>Edit</Link>} &middot;
            {job?.admin && <DeleteButton jobId={job?._id as string} />}
          </div>
        </div>
        <div className="content-end text-sm text-gray-400">
          <ReactTimeAgo createdAt={job?.createdAt as string} />
        </div>
      </div>
    </>
  );
};

export default JobRow;
