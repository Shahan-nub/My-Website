
import Image from "next/image";
import ImageBox from "../ui/ImageBox";

export default function SkillCard({skillObj}) {
    const {skillClass , allSkills} =skillObj;
  return (
    <ImageBox>
      <div className="flex flex-col py-6 lg:px-12 px-8"
      initial={{opacity:0,x:-50}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:1,type:"tween",delay:1}}
      >
        <h2 className="INTRO mb-4 lg:mb-8 font-bold text-2xl lg:text-4xl">{skillClass}</h2>
        {allSkills.map((skill) => {
            return(
                <p key={skill} className="text-color-1 italic">{skill}</p>
            )
        })}
      </div>
    </ImageBox>
  );
}
