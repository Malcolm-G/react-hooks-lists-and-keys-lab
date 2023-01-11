import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectItemsList = projects.map((project)=>{
    const {name, about, technologies} = project;
    return <ProjectItem key={project.id} name={name} technologies={technologies} about={about} />
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItemsList}</div>
    </div>
  );
}

export default ProjectList;
