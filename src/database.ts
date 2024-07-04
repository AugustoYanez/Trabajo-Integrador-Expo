import mongoose from "mongoose";

export const db = async () => {
    try {
        console.log(process.env.DATABASE);
        mongoose.connect(process.env.DATABASE || 'mongodb://localhost:27017/mascotaApp');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}