import React, { useState, useEffect } from "react";
import classNames from "classnames";

import skillsData from "../../data/skills.json";

import Skill from "../atoms/Skill";

import "./SkillList.less";

const SkillList = ({ className }) => {
  const [skillsCategory, setSkillsCategory] = useState();

  useEffect(() => {
    const mySkillsCategory = [];

    for (const skillCategory in skillsData) {
      if (
        skillCategory === "Front-end" ||
        skillCategory === "Back-end" ||
        skillCategory === "Tools"
      ) {
        mySkillsCategory.push(skillCategory);
      }
    }

    setSkillsCategory(mySkillsCategory);
  }, []);

  return (
    <div className={classNames(`${className}`)}>
      {skillsCategory &&
        skillsCategory.map((category) => {
          return (
            <div className={classNames(`${className}--category`)}>
              <h3 className={classNames(`${className}--category__name`)}>
                {skillsData[category].name}
              </h3>
              <div className={classNames(`${className}--category__skills`)}>

              {skillsData[category].skills.map((skill) => (
                <Skill
                skill={skill}
                key={skill.name}
                />
                ))}
                </div>
            </div>
          );
        })}
    </div>
  );
};

export default SkillList;
