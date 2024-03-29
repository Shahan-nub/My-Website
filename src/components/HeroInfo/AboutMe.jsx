"use client"
import {motion} from "framer-motion";
import Headings from "../ui/Headings";
import BulletTitle from "../ui/BulletTitle";

export default function AboutMe() {
  return (
    <motion.div className="flex self-start mt-6 lg:mt-8  flex-col w-full lg:w-[90%]"
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:1,type:'tween',delay:.8}}
    viewport={{once:true}}
    >
      <BulletTitle title="ABOUT ME"/>
      <Headings
        normalText="I'm passionate about creating beautiful websites with amazing"
        spanText="user experience."
        NTextSize="3"
      ></Headings>

      
    </motion.div>
  );
}
