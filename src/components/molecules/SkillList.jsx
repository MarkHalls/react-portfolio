import React, { useState, useEffect } from "react";
import classNames from "classnames";

import skillsData from "../../data/skills.json";

import Skill from "../atoms/Skill";

import "./SkillList.less";

const SkillList = ({ className }) => {
  const [skillsCategory, setSkillsCategory] = useState();
  const [skillsList, setSkillsList] = useState();

  useEffect(() => {
    const mySkillsCategory = [];
    const mySkills = [];

    for (const skillCategory in skillsData) {
      mySkillsCategory.push(skillCategory);

      if (skillCategory === "Front-end" || skillCategory === "Back-end") {
        mySkills.push(...skillsData[skillCategory].skills);
      }
    }

    setSkillsCategory(mySkillsCategory);
    setSkillsList(mySkills);
  }, []);

  return (
    <div className={classNames(`${className}`)}>
      <h2 id="skills" className={classNames(`${className}__header`)}>
        Skills
      </h2>
      <ul>
        {skillsList &&
          skillsList.map((skill) => (
            <Skill
              skill={skill}
              key={skill.name}
              className={classNames(`${className}--skill`)}
            />
          ))}
      </ul>
      {/* {skillsCategory &&
        skillsCategory.map((category) => {
          return (
            <>
              <h3 className={classNames(`${className}__category`)}>{skillsData[category].name}</h3>
              <ul>
                {
                  skillsData[category].skills.map((skill) => (
                    <Skill skill={skill} key={skill.name} className={classNames(`${className}--skill`)} />
                  ))
                }
              </ul>
            </>
          );
        })} */}
    </div>
  );
};

export default SkillList;
