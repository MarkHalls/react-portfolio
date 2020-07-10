import React from "react";
import classNames from "classnames";

import "./About.less";

const About = ({ className }) => {
  return (
    <div className={classNames("about")}>
      <h1>Mark Halls</h1>
      <h2>Full Stack Web Developer</h2>
    </div>
  );
};

export default About;
