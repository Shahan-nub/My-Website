"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageBox from "../ui/ImageBox";
import MyJourneyText from "../ui/MyJourneyText";

export default function MyJourney() {
  return (
    <motion.div
      className="flex md:flex-row flex-col w-full lg:my-12 my-10 2xl:gap-14  gap-10  pb-9 lg:pb-16 HBARS"
      initial={{ y: 75, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 1,delay:.8 }}
      viewport={{ once: true }}
    >
      <div className="COL-1 flex flex-col">
        <div className="md:hidden inline-block">
          <MyJourneyText title="This is my story - alongside some flicks from my college life."></MyJourneyText>
        </div>
        <ImageBox src="/assets/mypic1.jpg"></ImageBox>
        <MyJourneyText
          title="My background in Computer Science."
          desc="I was very much involved involved in tech since childhood but it was in 2022 after completing my high-school from Open Minds A Birla School, Patna-Bihar, I started exploring and learning new thing like web development, competetive-programming and different languages like C++, Java, JavaScript,etc."
        ></MyJourneyText>

        <ImageBox src="/assets/mypic2.jpg"></ImageBox>

        <div className="hidden md:inline-block">
          <MyJourneyText
            title="In my spare time,"
            desc="I play video games with my school buddies, try new cuisines, hit the gym, play badminton and try to get my hands on the latest tech."
          ></MyJourneyText>
          <h2 className="text-white font-semibold italic lg:mt-24 md:mt-16 px-6">
            Thanks for going through my journey!
          </h2>
        </div>
        {/* <Image src="/assets/sign.jpg" width={200} height={200} className=" bg-blend-multiply "></Image> */}
      </div>

      <div className="COL-2 flex flex-col">
        <div className="hidden md:inline-block">
          <MyJourneyText title="This is my story - alongside some flicks from my college life."></MyJourneyText>
          <ImageBox src="/assets/house.jpg"></ImageBox>
        </div>

        <MyJourneyText
          title="But, I wanted more"
          desc={`I was deeply fascinated by how websites work and there's so much more to Web-development than HTML,CSS,JS. 
        Then, I came across frameworks and it was mind-boggling that how frameworks make development easier and better.\n
        All of these sum up to why I'm studying Computer Science Engineering at KIIT, Odisha.
        `}
        ></MyJourneyText>
        <div className="hidden md:inline-block">
          <ImageBox src="/assets/mypic4.jpg"></ImageBox>
        </div>
        <div className="md:hidden inline-block">
          <ImageBox src="/assets/house.jpg"></ImageBox>
          <MyJourneyText
            title="In my spare time,"
            desc="I play video games with my school buddies, try new cuisines, hit the gym, play badminton and try to get my hands on the latest tech."
          ></MyJourneyText>
          <ImageBox src="/assets/mypic4.jpg"></ImageBox>

          <h2 className="text-white font-semibold italic mt-10 px-6">
            Thanks for going through my journey!
          </h2>
        </div>
      </div>
      
    </motion.div>
  );
}
