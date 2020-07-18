import React, { useState, useEffect } from "react";
import classNames from "classnames";

import ProjectCard from "../atoms/ProjectCard";

import projectData from "../../data/projects.json";
import "./Projects.less";

const Projects = ({ className }) => {
  const [myProjects, setMyProjects] = useState();

  useEffect(() => {
    const projects = [];
    for (const project in projectData) {
      projects.push(projectData[project]);
    }

    setMyProjects(projects.sort((a, b) => a.order - b.order));
  }, []);

  console.log(myProjects);
  return (
    <div className={classNames("projects")}>
      <h2 className={`projects--header`}>Projects</h2>
      {myProjects?.map((project) => (
        <ProjectCard project={project} className={`projects--project`} />
      ))}
    </div>
  );
};

export default Projects;
