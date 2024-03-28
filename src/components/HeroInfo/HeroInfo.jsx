import AboutMe from "./AboutMe";
import DynamicFrame from "./DynamicFrame";
import MyJourney from "./MyJourney";

export default function HeroInfo() {
  return (
    <div className="flex flex-col lg:w-[80vw] w-[90vw] items-center">
      <AboutMe></AboutMe>
      <MyJourney></MyJourney>
      {/* <DynamicFrame></DynamicFrame> */}
    </div>
  );
}
