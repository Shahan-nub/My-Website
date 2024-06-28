import nodemailer from "nodemailer";
// import Sender from "@/models/senderModel";

export const sendEmail = async ({name,email,message}) => {
    try {

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            secure: false,
            auth: {
              user: "e1b50397693812",
              pass: "576af7df896fd2",
            },
          });

          const mailOptions = {
            from: email,
            to: "shahananwer786@gmail.com",
            subject:"contact mail",
            html: `<p><p>Sender's name: ${name}</p>
            <br><p>${message}</p></p>`,
          };

          const mailResponse = await transporter.sendMail(mailOptions);

          return mailResponse;

    } catch (error) {
        console.log(error);
    }
}