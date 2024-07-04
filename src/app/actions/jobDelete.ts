'use server'
import { jobModel } from '@/models/Job';
import mongoose from 'mongoose';


export const DELETE = async (id: string) => {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const res = JSON.parse(JSON.stringify(await jobModel.findByIdAndDelete(id)))
    return res
}