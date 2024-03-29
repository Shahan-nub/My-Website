import BulletTitle from "../ui/BulletTitle";
import EducationCard from "./EducationCard";
import { EDUCATION } from "@/Constants/EducationConst";

export default function Education() {
  return (
    <div className="w-[90vw] lg:w-[80vw] HBARS pb-12 lg:pb-20">
      <BulletTitle title="EDUCATION"></BulletTitle>
     {EDUCATION.map(({degree,place,link}) => {
        return(
            <EducationCard degree={degree} place={place} link={link}/>
        )
     })}
    </div>
  )
}
