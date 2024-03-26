import HeroWork from "@/components/HeroWork/HeroWork";
import Navbar from "@/components/navbar/Navbar";
import ProjectCard from "@/components/projects/ProjectCard";
import Projects from "@/components/projects/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
    <HeroWork></HeroWork>
    <Projects></Projects>
    </div>
  );
}
