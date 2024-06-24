"use client";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";


export default function ProjectCard({project}) {
  const { name, frameworks, desc, link, imgSrc, w, h, bg } = project;
  return (
    <motion.div
      className="PROJECT group bg-[#181818] rounded-3xl  text-[#d1d0ca] my-4 sm:my-12 lg:my-16 
      w-[100vw] lg:w-[80vw] lg:p-2 px-1 pt-1"
      initial={{ y: 350, opacity: 0, scale: 0.92 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 1 }}
      viewport={{ once: true }}
    >
      <div
        className={`w-full bg-gradient-to-b from-[#333] to-[#131313] ${bg} lg:py-8 pt-6 px-3 lg:px-8 border rounded-xl transition-all ease-in  `} >
        <div className="flex justify-between items-center max-sm:mb-5">
          <div className="PROJECT_NAME flex flex-col gap-5 ">
            <div className=" max-sm:text-2xl max-sm:font-normal text-xl font-medium">{name}</div>
            <div className="">
              {desc} <span className="text-color-1">- {frameworks}</span>
            </div>
          </div>
          <div className="text-4xl cursor-pointer lg:mr-4 mr-2">
            <Link href={link} target="_blank">
              <IoIosArrowRoundForward />
            </Link>
          </div>
        </div>
        <Link href={link} target="_blank">
          <Image
            src={imgSrc}
            width={w}
            height={h}
            className="w-full group-hover:translate-y-[-3%] group-hover:scale-[1.01] transition-all ease-in-out duration-300 rounded-md lg:rounded-xl mt-10 border border-[#8b8b8b] "
          ></Image>
        </Link>
      </div>
    </motion.div>
  );
}

