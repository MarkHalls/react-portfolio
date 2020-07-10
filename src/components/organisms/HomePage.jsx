import React from "react";
import classNames from "classnames";

import SkillList from "../molecules/SkillList";
import About from "../molecules/About";
import Projects from "../molecules/Projects";

import "./HomePage.less";

const HomePage = ({ className }) => {
  return (
    <>
      <About />
      <SkillList className={classNames(`skill-list`)} />
      <Projects />
    </>
  );
};

export default HomePage;
