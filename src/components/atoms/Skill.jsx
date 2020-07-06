import React from "react";
import classNames from "classnames";

import "./Skill.less";

const Skill = ({ className, skill }) => {
  const { name, logo, url } = skill;

  return (
    <li className={classNames(className)} key={name}>
      <img src={`/img/${logo}`} className={classNames(`${className}__img`)} />
      <p className={classNames(`${className}__name`)}>{name}</p>
    </li>
  );
};

export default Skill;
