"use client"
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { BsArrowDown } from "react-icons/bs";
import {motion} from 'framer-motion'
import DownArrow from "../ui/DownArrow";
import MacOSlights from "../ui/MacOSlights";


export default function HeroWork() {
  return (
    <motion.div 
    initial={{y:100 , opacity:0, scale:.92}}
    whileInView={{y:0,opacity:1}}
    transition={{type:'tween',duration:1,delay:0.3}}
    viewport={{once:true}}
    className=" flex justify-center w-full items-center mt-8 mb-12">
      <div className="HERO_WORK lg:w-[80vw] w-[90vw] border-t text-[#dddbd4] rounded-2xl bg-gradient-to-b from-[#212121] to-[#101010] h-[70vh] p-2">
        <MacOSlights></MacOSlights>
        <div className="HERO_WORK flex flex-col lg:py-4 lg:pt-10 lg:px-10 px-6 py-10 gap-10">
            <div className="flex flex-col lg:hidden mb-8">
                <h4 className="text-base italic font-medium">
                   Shahan Ali Anwer  
                </h4>
                <p className="text-xs font-light text-color-1">
                   Web Developer
                </p>
            </div>
          <div className="INTRO text-white font-medium lg:text-7xl text-4xl ">
            I design & build  <br />
            <span className="font-semibold italic text-transparent bg-clip-text bg-gradient-to-b from-[#eeeeee] via-white to-[#4d4d4d]">
              web apps.
            </span>
          </div>
          <div className="flex self-end text-sm flex-col lg:mt-0 mt-8 lg:pr-10 pr-1">
            <p className="text-white">Developer at MLSA, based in KIIT.</p>
            <p className="text-color-1">Formerly at Glabs.</p>
          </div>
          <DownArrow></DownArrow>
        </div>
      </div>
    </motion.div>
  );
}
