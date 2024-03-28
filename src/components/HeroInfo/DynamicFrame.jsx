"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DynamicFrame() {
  return (
    <div className="w-[90vw] hidden lg:inline-block HBARS relative lg:h-[60vh] h-[50vh] px-1 lg:px-3 mb-16">
      <motion.div className="absolute top-[10%] left-2 border border-[#808080] rounded-3xl"
      animate={{opacity:[0,1,1,1,1,1,0],}}
      transition={{duration:6, type:'tween',repeat:Infinity,repeatDelay:5.8}}
      >
        <Image src="/assets/portrait3.jpg" height={3088} width={2300} className="w-[15vw] h-[45vh]  rounded-3xl "></Image>
      </motion.div>
      <motion.div className="absolute  top-[10%] left-2 border border-[#808080] rounded-3xl"
      animate={{opacity:[0,1,1,1,1,1,0],}}
      transition={{duration:6, type:'tween',repeat:Infinity,repeatDelay:5.8,delay:5.8}}
      >
        <Image src="/assets/portrait2.jpg" height={3024} width={4032} className="w-[15vw] h-[45vh] rounded-3xl"></Image>
      </motion.div>
      
      
      {/* LANDSCAPE ---------------------- */}

      <motion.div className="absolute top-[10%] left-[17vw] border-2 border-[#808080] rounded-3xl"
      animate={{opacity:[0,1,1,1,1,1,0],}}
      transition={{duration:8.5, type:'tween',repeat:Infinity,repeatDelay:8.3}}
      >
        <Image src="/assets/landscape1.jpg" height={3088} width={2300} className="w-[45vw] h-[45vh] rounded-3xl"></Image>
      </motion.div>
      <motion.div className="absolute top-[10%] left-[17vw] border-2 border-[#808080] rounded-3xl"
      animate={{opacity:[0,1,1,1,1,1,0],}}
      transition={{duration:8.5, type:'tween',repeat:Infinity,repeatDelay:8.3,delay:8.3}}
      >
        <Image src="/assets/landscape4.jpg" height={3024} width={4032} className="w-[45vw] h-[45vh] rounded-3xl"></Image>
      </motion.div>

      {/* PORTRAIT 2 ------------------ */}

      <motion.div className="absolute top-[10%] right-2 border border-[#808080] rounded-3xl"
      animate={{opacity:[0,1,1,1,1,1,0],}}
      transition={{duration:12, type:'tween',repeat:Infinity,repeatDelay:11.8}}
      >
        <Image src="/assets/house.jpg" height={3088} width={2300} className="w-[26vw] h-[45vh]  rounded-3xl "></Image>
      </motion.div>
      <motion.div className="absolute  top-[10%] right-2 border border-[#808080] rounded-3xl"
      animate={{opacity:[0,1,1,1,1,1,0],}}
      transition={{duration:12, type:'tween',repeat:Infinity,repeatDelay:11.8,delay:11.8}}
      >
        <Image src="/assets/bluesky1.jpg" height={3024} width={4032} className="w-[26vw] h-[45vh] rounded-3xl"></Image>
      </motion.div>

    </div>
  );
}
