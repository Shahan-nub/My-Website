import { PROJECTS } from "@/Constants/Constants"
import ProjectCard from "./ProjectCard"


export default function Projects() {
  return (
    <>
    {PROJECTS.map((project) => {
        return(
        <ProjectCard key={project.name} project={project}></ProjectCard>
        )
    })}
    </>
  )
}
