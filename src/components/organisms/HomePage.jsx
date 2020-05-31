import React from "react";
import classNames from "classnames";

import SkillList from "../molecules/SkillList";

import "./HomePage.less";

const HomePage = ({ className }) => {
  return (
    <div className={classNames(className)}>
      <SkillList />
    </div>
  );
};

export default HomePage;
