import SkillCard from "./SkillCard";
import SkillsTitle from "./SkillsTitle";

export default function Skills() {
  return (
    <div className="flex flex-col lg:w-[80vw] w-[90vw] items-center">
      <SkillsTitle></SkillsTitle>
      <SkillCard></SkillCard>
    </div>
  )
}
