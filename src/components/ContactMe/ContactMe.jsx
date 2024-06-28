"use client";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";
import Headings from "../ui/Headings";
import axios from "axios";
import { BsSendCheckFill } from "react-icons/bs";


export default function ContactMe() {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [btnClicked,setBtnClicked] = useState(false);

  const handleSendMail = async () => {
    try {
      const response = await axios.post("/api/users/sendmail",mail);
      console.log(response.data);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <section className="w-full my-8 lg:my-20 py-4 px-4 lg:px-32">
      {/* <hr className="w-1/3 mb-8 lg:mb-24 bg-slate-800 self-center shadow-[0_2px_13px_white] rounded-full"/> */}

      <div className="PROJECT  bg-gradient-to-b from-color-2 via-[rgb(27_27_27)] to-color-2 rounded-3xl  text-[#d1d0ca]  lg:p-2 px-1 pt-1">
        <div className="rounded-2xl PROJECT h-full border-t flex flex-col gap-6 lg:gap-10 px-4 lg:px-10 py-8 lg:py-12">
          <Headings normalText="Contact me"></Headings>
          <div className="flex w-full items-center gap-4 mt-5 lg:mt-12">
            <label className="basis-1/6 max-sm:basis-1/3 italic max-sm:text-sm" htmlFor="name">Name: </label>
            <input
              name="name"
              id="name"
              type="text"
              onChange={(e) => setMail({ ...mail, name: e.target.value })}
              className="bg-transparent text-white border-[.5px] rounded-md border-white py-2 px-3 w-full"
            />
          </div>

          <div className="flex w-full items-center gap-4">
            <label className="basis-1/6 max-sm:basis-1/3 italic max-sm:text-sm" htmlFor="name">Email: </label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={(e) => setMail({ ...mail, email: e.target.value })}
              className="bg-transparent text-white border-[.5px] rounded-md border-white py-2 px-3 w-full"
            />
          </div>

          <div className="flex w-full items-center gap-4">
            <label className="basis-1/6 max-sm:basis-1/3 italic max-sm:text-sm" htmlFor="name">Message: </label>
            <input
              type="textarea"
              name="message"
              id="message"
              onChange={(e) => setMail({ ...mail, message: e.target.value })}
              className="bg-transparent text-white border-[.5px] rounded-md border-white py-2 px-3 w-full"
            />
          </div>

          <div 
          onClick={() => {
            if(mail.name.length>0 && mail.email.length>0 && mail.message.length>0){
                console.log(mail)
                handleSendMail();
                setBtnClicked(true);
              }
          }}
          className="relative rounded-md border border-white w-max px-4 lg:px-6 py-2 text-white flex gap-2 items-center backdrop-blur-sm self-center mt-4 lg:mt-8 cursor-pointer hover:shadow-[0_0px_5px_white]">
            {!btnClicked && <p className={`pb-1 lg:text-lg`}>Send</p>}
            {btnClicked && <p className="pb-1 lg:text-lg ">Sent</p>}
            <IoMdSend className={`${btnClicked && " rotate-[360deg] transition-all opacity-0 duration-500"}`}></IoMdSend>
          <BsSendCheckFill className={` ${btnClicked ? "inline-block text-green-400" : "hidden"}`}></BsSendCheckFill>
          </div>
        </div>
      </div>
    </section>
  );
}
