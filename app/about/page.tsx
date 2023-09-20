import React from "react";
import style from "./style.module.scss";
import profile from "../../assets/profile.jpg";
import Image from "next/image"; // Import the Image component
import { Skill } from "@/components/SkillsBar/SkillsBar";
import SkillsGrid from "@/components/ProgressGrid";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";

const skills: Skill[] = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "React Native", level: 85 },
  { name: "Next JS", level: 50 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 70 },
  { name: "Git", level: 80 },
  { name: "Python", level: 40 },

  // Add more skills here
];

const About: React.FC = () => {
  return (
    <Wrapper>
      <div className={style.container}>
        <span className={style.profilePic}>
          <Image src={profile} alt="my-profile-pic" />
        </span>
        <h3>
          <span className={style.typewriter}>Hi, Iam Basil Reji</span>
        </h3>
        <div className={style.whoAmI}>
          <h3>Who am I</h3>
          <p>
            I’m a developer who has passion for building clean web applications
            with intuitive functionalities. I enjoy the process of turning ideas
            into reality using creative solutions. I’m always curious about
            learning new skills, tools, and concepts. In addition to working on
            various solo full stack projects, I have worked with creative teams,
            which involves daily stand-ups and communications, source control,
            and project management.
          </p>
        </div>
        <div className={style.skillContainer}>
          <h3>My Skills</h3>
          <SkillsGrid skills={skills} />
        </div>
        <div className={style.downloadContainer}>
          <Link className={style.downloadButton} href={"/download"}>
            Download My Resume
            <div className={style.downloadButton__horizontal}></div>
            <div className={style.downloadButton__vertical}></div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
