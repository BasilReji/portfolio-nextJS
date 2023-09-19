'use client'

import { useState, useEffect } from "react";
import styles from "./SkillsBar.module.scss";

export interface Skill {
  name: string;
  level: number;
}

export interface SkillsBarProps {
  skills: Skill[];
}

const SkillsBar: React.FC<SkillsBarProps> = ({ skills }) => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsBar = document.querySelector(`.${styles["skills-bar"]}`);

      if (skillsBar) {
        // Check if skillsBar is not null
        const skillsBarPosition = skillsBar.getBoundingClientRect().top;

        if (skillsBarPosition < window.innerHeight && !animationTriggered) {
          setAnimationTriggered(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationTriggered]);

  return (
    <div className={styles["skills-bar"]}>
      <h3>My Skills</h3>
      {skills.map((skill) => (
        <div key={skill.name} className={styles.skill}>
          <div className={styles["skill-name"]}>{skill.name}</div>
          <div className={styles["skill-bar"]}>
            <div
              className={`${styles["bar-fill"]} ${
                animationTriggered ? styles.animate : ""
              }`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { SkillsBar };
