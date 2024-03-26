"use client";

import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

import Links from "../ui/Links";
import { useState } from "react";
import { PiLinkSimple } from "react-icons/pi";
import {motion} from 'framer-motion'

export default function Navbar() {
  const [body, setBody] = useState("work");
  const [showAllLinks,setShowAllLinks] = useState(false);
  return (
    <motion.div 
    initial={{opacity:0,}}
    animate={{opacity:1,}}
    transition={{duration:.7,type:'tween'}}
    className="w-screen flex px-6 py-3 lg:py-5 lg:px-12 justify-between items-center">
      <div className="LOGO flex items-center gap-2 lg:gap-4">
        <div className="">
          <Image
            src="/logo.jpg"
            width={40}
            height={40}
            className="lg:h-10 lg:w-10 rounded-full"
          ></Image>
        </div>
        <div className="flex-col hidden lg:flex ">
          <h3 className="text-white  lg:text-lg font-medium ">Shahan Ali</h3>
          <p className="text-color-1 font-extralight text-xs lg:text-sm">
            Web developer
          </p>
        </div>
      </div>
      <div className="WORK_INFO backdrop-blur-lg border-gray-500 border px-2 py-2 flex text- rounded-[3rem] items-center gap-6 lg:gap-10 text-white relative">
        <p
          className={`absolute rotate-90 leading-4 -top-2 font-extrabold text-lg bg-transparent
           ${body === "work" && "left-[22%] shadow-[30px_5px_300px_60px_white]  md:shadow-[30px_5px_300px_30px_white]" } 
          ${body === "info" && "right-[21%] shadow-[30px_5px_300px_60px_white] md:shadow-[30px_50px_300px_30px_white] "}`}
        >|</p>

        <div
          className={`py-2 px-3 lg:px-4 rounded-3xl ${
            body === "work" && "bg-[rgb(39_38_38)]"
          } `}
          onClick={() => {
            setBody("work");
          }}
        >
          Work
        </div>
        <div
          className={`py-2 px-3 lg:px-4 rounded-3xl ${
            body === "info" && "bg-[rgb(39_38_38)]"
          } `}
          onClick={() => {
            setBody("info");
          }}
        >
          Info
        </div>
      </div>
      <Links></Links>
      <div className="inline-block lg:hidden">
        <PiLinkSimple className="text-[#e3e3db] text-3xl" onClick={() => setShowAllLinks(!showAllLinks)}></PiLinkSimple>
        <motion.div
        initial={{x:20,y:-20,scale:.5,opacity:0}}
        whileInView={{opacity:1,x:0,y:0,scale:1}}
        transition={{duration:.3,type:"tween",}}
        className={`${showAllLinks ? 'flex': 'hidden'} absolute flex-col backdrop-blur-sm py-2 px-3 border-[#dbdacf] border rounded-2xl top-16 right-2 z-50 text-white divide-y divide-[#dbdacf]`}
        >
          <div className="flex z-20  mx-2 py-1 items-center justify-between">
            <p>Linked in</p>
            <MdArrowOutward></MdArrowOutward>
          </div>
          <div className="flex z-20 mx-2 py-1 items-center justify-between">
            <p>GitHub</p>
            <MdArrowOutward></MdArrowOutward>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
