import React from "react";
import classNames from "classnames";

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
        <h2 className={classNames(`${className}__name`)}>{project.name}</h2>
        <p className={classNames(`${className}__role`)}>{project.role}</p>
        <p className={classNames(`${className}__description`)}>
          {project.description}
        </p>
        <p className={classNames(`${className}__contribution`)}>
          {project.contribution}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
