"use client"
import { motion } from "framer-motion";
import Headings from "../ui/Headings";
import BulletTitle from "../ui/BulletTitle";

export default function SkillsTitle() {
  return (
      <motion.div className="flex self-start my-6 lg:my-8  flex-col w-full lg:w-[90%]"
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1,type:'tween'}}
    viewport={{once:true}}
    >
      <BulletTitle title="MY SKILLS"></BulletTitle>
      <Headings
        normalText="I'm a MERN stack developer specialised in"
        spanText="frontend."
        NTextSize="3"
      ></Headings>

    </motion.div>
  )
}
