import mongoose, { Schema, model, models } from "mongoose";

export const jobSchema = new Schema({
  orgId: {
    type: String,
    required: true,
  },
  jobTitle: { type: String, required: true },
  remote: {
    type: String,
  },
  type: {
    type: String,
  },
  salary: {
    type: String,
  },
  cityName: {
    type: String,
  },
  countryName: {
    type: String,
  },
  stateName: {
    type: String,
  },
  iconImage: {
    type: String,
  },
  personImage: {
    type: String,
  },
  phone: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  description: {
    type: String,
  },
}, {
  timestamps: true,
});

// export const jobModel = models?.job || model("Job", jobSchema);
export const jobModel = models.Job || model("Job", jobSchema);
