import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import "./NavBar.less";

const NavBar = ({ className }) => {
  return (
    <div className={classNames(className)}>
      <NavLink to="#projects">Projects</NavLink>
      <NavLink to="#about">About</NavLink>
      <NavLink to="#contact">Contact</NavLink>
    </div>
  );
};

export default NavBar;
