import React from "react";
import classes from "./Intro.module.css";
import photo from "../Assets/images/myAvatar.png";

const Intro = () => {
  return (
    <div className="main">
      <img src={photo} alt="profile" className={classes.profilePhoto} />
      <p className={classes.introText}>
        A Self-taught Programmer, Who Love to code.
      </p>
      <p className={classes.welcomeText}>Welcome to my Portfolio</p>
    </div>
  );
};

export default Intro;
