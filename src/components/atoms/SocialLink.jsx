import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import "./SocialLink.less";

const SocialLink = ({ img, name, url }) => {
  const className = "social-link";
  return (
    <a href={`${url}`} target="_blank" className={classNames(className)}>
      <img
        className={classNames(`${className}__icon`)}
        src={img}
        alt={`${name} icon`}
      />
      <p className={classNames(`${className}__name`)}>{`${name}`}</p>
    </a>
  );
};

export default SocialLink;
