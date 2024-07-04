import JobForm from "@/app/components/JobForm";
import { jobModel } from "@/models/Job";
import { getUser } from "@workos-inc/authkit-nextjs";
import mongoose from "mongoose";
import React from "react";

type IProps = {
  params: {
    jobId: string;
  };
};

const jobEditPage = async ({ params }: IProps) => {
  const jobId = params.jobId;
  const { user } = await getUser();
  if (!user) {
    return "Please Login...";
  }
  await mongoose.connect(process.env.MONGODB_URI as string);
  const job = JSON.parse(JSON.stringify(await jobModel.findById(jobId)));
  return (
    <>
      <JobForm job={job} orgId={job.orgId} />
    </>
  );
};

export default jobEditPage;
