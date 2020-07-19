import React from "react";
import classNames from "classnames";

import SkillList from "../molecules/SkillList";
import Projects from "../molecules/Projects";
import Contact from "../molecules/Contact";

import "./HomePage.less";

const HomePage = ({ className }) => {
  return (
    <div className={classNames("homepage")}>
      {/* <About /> */}
      <SkillList className={classNames(`skill-list`)} />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
