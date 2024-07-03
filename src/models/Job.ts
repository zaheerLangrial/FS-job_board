import mongoose, { Schema, model, models } from "mongoose";

export const jobSchema = new Schema({
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
  userInformation: new Schema({
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
  }),
  description: {
    type: String,
  },
});


export const jobModel = models?.job || model('Job', jobSchema)