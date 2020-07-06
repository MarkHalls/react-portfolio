import React from "react";
import classNames from "classnames";

import SkillList from "../molecules/SkillList";

import "./HomePage.less";

const HomePage = ({ className }) => {
  return (
    <SkillList className={classNames(`skill-list`)} />
  );
};

export default HomePage;
