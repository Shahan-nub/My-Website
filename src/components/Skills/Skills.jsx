import SkillCard from "./SkillCard";
import SkillsMap from "./SkillsMap";
import SkillsTitle from "./SkillsTitle";



export default function Skills() {
  return (
    <div className="flex flex-col lg:my-10 my-7 lg:w-[80vw] w-[90vw] items-center">
      <SkillsTitle></SkillsTitle>
      <SkillsMap></SkillsMap>
    </div>
  )
}
