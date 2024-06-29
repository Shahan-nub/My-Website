import mongoose from "mongoose";

export async function connectDB() {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection;

        connection.on("connected",() => {
            console.log("mongoDB connected")
        })

        connection.on("error",(err) => {
            console.log("mongoDB connection error",err);
            process.exit();
        })
    } catch (error) {
        console.log("something went wrong while connecting to DB: ",error)
    }
}