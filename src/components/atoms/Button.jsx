import React from "react";
import classNames from "classnames";

import "./Button.less";

const Button = ({ type, url, label }) => {
  return (
    <div className={classNames("button")}>
      <a
        href={url}
        target="_blank"
        className={classNames("button__link", type)}
      >
        {label}
      </a>
    </div>
  );
};

export default Button;
