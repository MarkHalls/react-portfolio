import React from "react";
import classNames from "classnames";

import SocialLink from "../atoms/SocialLink";

import "./NavBar.less";

const NavBar = () => {
  const className = "navbar";
  return (
    <div className={classNames(className)}>
      <div className={classNames(`${className}__about`)}>
        <h1 className={classNames(`${className}__about__name`)}>Mark Halls</h1>
        <h2 className={classNames(`${className}__about__role`)}>
          Full-Stack Web Developer
        </h2>
      </div>
      <div className={classNames(`${className}__social`)}>
        <SocialLink
          name="GitHub"
          url="https://github.com/mark-halls"
          img="/img/github-icon.svg"
        />
        <SocialLink
          name="LinkedIn"
          url="https://github.com/mark-halls"
          img="/img/linkedin-icon.svg"
        />
        <SocialLink
          name="Email"
          url="mailto:mark.halls@gmail.com"
          img="/img/email-icon.svg"
        />
      </div>
    </div>
  );
};

export default NavBar;
