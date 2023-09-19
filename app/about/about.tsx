import React from "react";
import style from "./style.module.scss";
import profile from "../../assets/profile.jpg";
import Image from "next/image"; // Import the Image component
const About: React.FC = () => {
  return (
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
          A passionate React and React Native developer with a keen interest in
          exploring new technologies
        </p>
      </div>
    </div>
  );
};

export { About };
