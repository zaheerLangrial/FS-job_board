import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { typeJobData } from "../actions/jobAction";
import { ReactTimeAgo } from "./ReactTimeAgo";
import { getUser } from "@workos-inc/authkit-nextjs";
import { Button } from "@radix-ui/themes";

type IProps = {
  job: typeJobData;
  companyName?: string;
};
const JobRow = async ({ job, companyName }: IProps) => {
  const { user } = await getUser();
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
            {job?.countryName || "--"} &middot; {job?.type || "--"}
            {user && (
              <button>Edit</button>
            )} &middot; 
            {user && (
              <button>Delete</button>
            )}
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
