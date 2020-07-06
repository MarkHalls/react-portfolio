import React, { useState, useEffect } from "react";
import classNames from "classnames";

import skillsData from "../../data/skills.json";

import Skill from "../atoms/Skill";

import "./SkillList.less";

const SkillList = ({ className }) => {
  const [skillsCategory, setSkillsCategory] = useState();

  useEffect(() => {
    const mySkills = [];

    for (const skillCategory in skillsData) {
      mySkills.push(skillCategory);
    }

    setSkillsCategory(mySkills);
  }, []);

  console.log(skillsCategory);
  return (
    <div className={classNames(`${className}`)}>
      <h2 id="skills" className={classNames(`${className}__header`)}>Skills</h2>
      {skillsCategory &&
        skillsCategory.map((category) => {
          return (
            <>
              <h3 className={classNames(`${className}__category`)}>{skillsData[category].name}</h3>
              <ul>
                {skillsData[category].skills.map((skill) => (
                  <Skill skill={skill} key={skill.name} className={classNames(`${className}--skill`)} />
                ))}
              </ul>
            </>
          );
        })}
    </div>
  );
};

export default SkillList;
