import Jobs from "@/app/components/Jobs";
import { IProps } from "@/app/new-listing/[orgId]/page";
import { jobModel } from "@/models/Job";
import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import mongoose from "mongoose";
import React from "react";

const CompanyJobs = async ({ params }: IProps) => {

  const {user} = await getUser()
  if(!user) {
    return 'Please Login'
  }
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  const org = await workos.organizations.getOrganization(params.orgId);
  await mongoose.connect(process.env.MONGODB_URI as string);
  const jobs = await jobModel.find({ orgId: org.id });
  if(!jobs) {
    return 'Record Not found'
  }
  return (
    <div className="px-6">
      <pre>{JSON.stringify(jobs, null, 2)}</pre>
      <Jobs
        header={"Jobs posted by " + org.name}
        jobs={jobs}
        companyName={org.name}
      />
    </div>
  );
};

export default CompanyJobs;
