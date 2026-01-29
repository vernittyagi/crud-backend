import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/auth_demo');
        console.log("mongo db connected");
    } catch (err) {
        console.log("DB Error - ", err);
    }
}

export default connectDB