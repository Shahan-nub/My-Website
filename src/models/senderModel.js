import mongoose from "mongoose";

const senderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name."]
    },
    email:{
        type:String,
        required:[true,"Please enter your email."]
    },
    message:{
        type:String,
        required:[true,"Please enter your message."]
    }
})

const Sender = mongoose.models.senders || mongoose.model("senders",senderSchema); 

export default Sender;