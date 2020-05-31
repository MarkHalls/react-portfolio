import React from "react";
import classNames from "classnames";

import "./Skill.less";

const Skill = ({ className, skill }) => {
  return <li className={classNames(className)}>{skill}</li>;
};

export default Skill;
