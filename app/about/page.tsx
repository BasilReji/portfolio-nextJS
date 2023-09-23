import React from "react";
import style from "./style.module.scss";
import profile from "../../assets/profile2.jpg";
import Image from "next/image"; // Import the Image component
import { Skill } from "@/components/SkillsBar/SkillsBar";
import SkillsGrid from "@/components/ProgressGrid";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import TimeLine from "@/components/TimeLine";

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

const events = [
  {
    date: "August 2019",
    event: "Graduation- Bachelor of Technology in Computer Science engineering",
  },
  {
    date: "December 2019",
    event: "Internship- Java fullstack developer",
  },
  {
    date: "July 2020",
    event: "First Job- Factweavers Technology",
  },
  {
    date: "September 2020",
    event: "Called myself a React Developer",
  },
  {
    date: "August 2021",
    event: "Called myself a React Native Developer",
  },
  {
    date: "September 2021",
    event: "Worked on more than 10 projects, both on React and React Native",
  },
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
        <div className={style.achievementsContainer}>
          <div className={style.experience}>
            <h3 className={style.number}>
              3<sup>+</sup>
            </h3>
            <span>Years of experience</span>
          </div>
          <div className={style.experience}>
            <h3 className={style.number}>
              20<sup>+</sup>
            </h3>
            <span>Projects</span>
          </div>
          <div className={style.experience}>
            <h3 className={style.number}>
              30<sup>+</sup>
            </h3>
            <span>Certifications</span>
          </div>
        </div>

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
        <TimeLine title="My Growth" events={events} />
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
