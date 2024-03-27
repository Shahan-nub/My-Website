import HeroInfo from "@/components/HeroInfo/HeroInfo";
import Skills from "@/components/Skills/Skills";

export default function Info() {
  return (
    <div className="flex flex-col items-center">
      <HeroInfo></HeroInfo>
      <Skills></Skills>
    </div>
  )
}
