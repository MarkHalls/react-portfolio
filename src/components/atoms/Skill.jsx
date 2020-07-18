import React from "react";
import classNames from "classnames";

import "./Skill.less";

const Skill = ({ skill }) => {
  const { name } = skill;
  return <p className={classNames(`skill__name`)}>{name}</p>;
};

export default Skill;
