import React from "react";
import Headings from "../ui/Headings";

export default function AboutMe() {
  return (
    <div className="flex self-start mt-6 lg:mt-8  flex-col w-full lg:w-[90%]">
      <div className="text-color-1 flex  gap-1 lg:gap-2">
        <span className="DOT text-white text-lg lg:text-3xl">•</span>
        <span className="font-medium text-xs self-center lg:tex-sm pt-[3px] lg:pt-1">
          ABOUT ME
        </span>
      </div>
      <Headings
        normalText="I'm passionate about creating beautiful websites with amazing"
        spanText="user experience."
        NTextSize="3"
      ></Headings>
    </div>
  );
}
