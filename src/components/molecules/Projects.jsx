import React, { useState, useEffect } from "react";
import classNames from "classnames";

import ProjectCard from "./ProjectCard";

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

  return (
    <div className={classNames("projects")}>
      {myProjects?.map((project) => (
        <ProjectCard
          project={project}
          key={project.name}
          className={`projects--project`}
        />
      ))}
    </div>
  );
};

export default Projects;
