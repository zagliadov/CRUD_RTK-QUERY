import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

export const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`MongoDB connected on port ${process.env.MONGO_URI}`)
};