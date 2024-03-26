import { PROJECTS } from "@/Constants/Constants"
import ProjectCard from "./ProjectCard"


export default function Projects() {
  return (
    <>
    {PROJECTS.map((project) => {
        return(
        <ProjectCard project={project}></ProjectCard>
        )
    })}
    </>
  )
}
