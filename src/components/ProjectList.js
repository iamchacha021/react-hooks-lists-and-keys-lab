import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectsRet = projects.map((project)=>{
    return (
      <div className="project-item" key={project.id}>
        <h3>{project.name}</h3>
        <p>{project.about}</p>
      </div>
    )
  })
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      {projectsRet}
      <ProjectItem technologies={projects.technologies} />
    </div>
  );
}

export default ProjectList;
