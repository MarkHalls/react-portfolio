import React from "react";
import classNames from "classnames";

import SocialLink from "../atoms/SocialLink";

import "./Contact.less";

const Contact = ({}) => {
  const className = "contact";

  return (
    <div className={classNames(className)}>
      <h2 className={classNames(`${className}__header`)}>
        We should work together!
      </h2>
      <p className={classNames(`${className}__about`)}>
        I'm always looking for passionate people to work with. Hit me up so we
        can make dreams reality.
      </p>
      <div className={classNames(`${className}__social`)}>
        <SocialLink
          name="GitHub"
          url="https://github.com/MarkHalls"
          img="/img/github-icon.svg"
        />
        <SocialLink
          name="LinkedIn"
          url="https://www.linkedin.com/in/mark-halls"
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

export default Contact;
