import { WorkOS } from "@workos-inc/node";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
} from "@workos-inc/authkit-nextjs";
import mongoose from "mongoose";
import { jobModel } from "@/models/Job";

export default async function Home() {
  const { user } = await getUser();

  // Get the URL to redirect the user to AuthKit to sign in
  const signInUrl = await getSignInUrl();

  // Get the URL to redirect the user to AuthKit to sign up
  const signUpUrl = await getSignUpUrl();

  await mongoose.connect(process.env.MONGODB_URI as string)
  const jobs = await jobModel.find()
  return (
    <>
      <Hero />
      <Jobs jobs={jobs} header="Recent Jobs" companyName="--" />
    </>
  );
}
