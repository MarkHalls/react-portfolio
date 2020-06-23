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
    <>
      <h2 id="skills">Skills</h2>
      {skillsCategory &&
        skillsCategory.map((category) => {
          return (
            <>
              <h3>{skillsData[category].name}</h3>
              <ol>
                {skillsData[category].skills.map((skill) => (
                  <Skill skill={skill.name} key={skill.name} />
                ))}
              </ol>
            </>
          );
        })}
    </>
  );
};

export default SkillList;
