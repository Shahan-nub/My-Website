import SkillCard from "./SkillCard";
import SkillsMap from "./SkillsMap";
import SkillsTitle from "./SkillsTitle";



export default function Skills() {
  return (
    <div className="flex flex-col my-8 mb-20 lg:my-12 lg:w-[80vw] w-[90vw] items-center">
      <SkillsTitle></SkillsTitle>
      <SkillsMap></SkillsMap>
    </div>
  )
}
