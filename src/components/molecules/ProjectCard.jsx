import React from "react";
import classNames from "classnames";

import Button from "../atoms/Button";

import "./ProjectCard.less";

const ProjectCard = ({ className, project }) => {
  return (
    <div className={classNames(className)}>
      <div className={classNames(`${className}--img-container`)}>
        <img
          className={classNames(`${className}--img-container__img`)}
          src={`/img/screenshots/${project.img}`}
          alt={`${project.name} screenshot`}
        />
      </div>
      <div className={classNames(`${className}--text-container`)}>
        <h2 className={classNames(`${className}--text-container__name`)}>
          {project.name}
        </h2>
        <p className={classNames(`${className}--text-container__role`)}>
          {project.role}
        </p>
        <p className={classNames(`${className}--text-container__description`)}>
          {project.description}
        </p>
        <p className={classNames(`${className}--text-container__contribution`)}>
          {project.contribution}
        </p>

        <div className={classNames(`${className}--text-container--buttons`)}>
          <Button url={project["url"]} type="live" label="Visit" />
          <Button url={project["github-fe"]} type="github" label="Github" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
