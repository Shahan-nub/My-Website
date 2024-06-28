import { connectDB } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import Sender from "@/models/senderModel";
import { NextRequest,NextResponse } from "next/server";

connectDB();

export const POST = async (request=NextRequest) => {
    try {
        const reqBody = await request.json();
        const {name,email,message} = reqBody;
        console.log(reqBody);
        await sendEmail({name,email,message});

        const newMail = new Sender({
            name:name,
            email:email,
            message:message,
        })
        
        const savedMail = await newMail.save();

        return NextResponse.json({
            status:200,
            message:"Email sent successfully",
            savedMail,
         })

    } catch (error) {
        return NextResponse.json({error:error.message});
    }
}