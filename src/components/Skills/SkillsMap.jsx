import { SkillsARR } from "@/Constants/AllSkill"
import SkillCard from "./SkillCard"

export default function SkillsMap() {
  return (
    <div className='w-full flex justify-center md:flex-row flex-col gap-8 lg:gap-12'>
      {SkillsARR.map((SkillObj) => {
        return (
            <SkillCard skillObj={SkillObj}></SkillCard>
        )
      })}
    </div>
  )
}
