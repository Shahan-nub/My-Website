import mongoose from "mongoose";

export async function connectDB() {
    try {
        mongoose.connect("mongodb+srv://shahanali12021:K70g6eHl8Z42x9b7@mdbbasics1.5ufndvh.mongodb.net/portfolio");
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