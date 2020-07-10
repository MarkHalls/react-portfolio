import React from "react";
import classNames from "classnames";

import "./Skill.less";

const Skill = ({ className, skill }) => {
  const { name, logo, url } = skill;

  return (
    <li className={classNames(className)} key={name}>
      <div className={classNames(`${className}--img-container`)}>
        <img
          src={`/img/${logo}`}
          className={classNames(`${className}--img-container__img`)}
        />
      </div>
      <p className={classNames(`${className}__name`)}>{name}</p>
    </li>
  );
};

export default Skill;
