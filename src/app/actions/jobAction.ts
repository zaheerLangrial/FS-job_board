"use server";
import { jobModel } from "@/models/Job";
import mongoose from "mongoose";

export type typeJobData = {
  jobTitle: string;
  remote: string;
  type: string;
  salary: string;
  name: string;
  cityName: string;
  countryName: string;
  description: string;
  email: string;
  iconImage: string;
  orgId: string;
  personImage: string;
  phone: string;
  stateName: string;
  createdAt?: string;
};

export const SaveJobAction = async (data: typeJobData) => {
  console.log("Data in SaveJobAction", data);
  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Database is connected....");
  } catch (error) {
    console.log("DataBase not Connected:", error);
  }
  const jobDoc = await jobModel.create(data);
  return JSON.parse(JSON.stringify(jobDoc));
};