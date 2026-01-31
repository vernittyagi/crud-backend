import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo db connected");
    } catch (err) {
        console.log("DB Error - ", err);
    }
}

export default connectDB