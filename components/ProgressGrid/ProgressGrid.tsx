import React from "react";
import CircularProgressBar from "../CircularProgressBar";
import styles from "./style.module.scss";

interface Skill {
  name: string;
  level: number;
}

interface SkillsGridProps {
  skills: Skill[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  return (
    <div className={styles.skillsGrid}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillItem}>
          <CircularProgressBar
            size={100}
            strokeWidth={10}
            percentage={skill.level}
          />
          <p className={styles.skillName}>{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export { SkillsGrid };
