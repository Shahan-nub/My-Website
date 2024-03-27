"use client"
import Image from "next/image";
import { PiInstagramLogoLight } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import {motion} from 'framer-motion'
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-screen flex flex-col lg:flex-row justify-between text-white border-t px-10 lg:px-40 py-6 lg:py-16">
      <motion.div className="flex flex-col "
      initial={{opacity:0,x:-50}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:.6,type:"tween"}}
      viewport={{once:true}}
      >
        <div className="border shadow-[0_0_40px_1px_#5d5b5b] border-[#e3e2dd] p-[2px] w-max rounded-3xl hidden lg:inline-block">
          <Image
            src="/logo.jpg"
            width={70}
            height={70}
            className="rounded-3xl bg-blend-multiply"
          ></Image>
        </div>
        <div className="lg:mt-24 mt-4 ">
          &#169; 2024 Shahan Ali. All rights reserved.
        </div>
        <p className="text-color-1 lg:text-sm text-xs">Created on 27th March, 2024</p>
      </motion.div>

      <motion.div className="flex flex-col my-10 lg:my-2 lg:pr-0 lg:border-none pr-24 border-r border-white gap-5 lg:gap-8 lg:text-2xl"
         initial={{opacity:0,x:50}}
         whileInView={{opacity:1,x:0}}
         transition={{duration:.6,type:"tween"}}
         viewport={{once:true}}
      >
        <span className="text-semibold lg:font-semibold text-sm text-color-1 leading-[10px">
            SOCIALS
        </span>
        <Link
          href="https://www.instagram.com/.shxhxn.._?igsh=MzE4dXZ4dHFvMmJp"
          className="flex items-center gap-4 group  cursor-pointer  lg:gap-6 justify-between px-4"
        >
          <PiInstagramLogoLight className=" rounded-lg" />
          <p className="lg:text-base text-sm lg:font-medium ">Instagram</p>
          <MdArrowOutward></MdArrowOutward>
        </Link>
        <Link
          href="https://github.com/Shahan-nub"
          className="flex items-center gap-4 cursor-pointer lg:gap-6 justify-between px-4"
        >
          <IoLogoGithub className=" rounded-full" />
          <p className="lg:text-base text-sm lg:font-medium ">GitHub</p>
          <MdArrowOutward></MdArrowOutward>
        </Link>
        <Link
          href="https://www.linkedin.com/in/shahan-ali-anwer-5465972a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          className="flex items-center gap-4 cursor-pointer lg:gap-6 justify-between px-4"
        >
          <FaLinkedinIn className="" />
          <p className="lg:text-base text-sm lg:font-medium ">LinkedIn</p>
          <MdArrowOutward></MdArrowOutward>
        </Link>
        <span className="text-color-1 lg:mt-0 mt-6 text-xs lg:text-sm">Last updated on April 4th, 2024.</span>
      </motion.div>
    </div>
  );
}
