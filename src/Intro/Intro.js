import React from "react";
import classes from "./Intro.module.css";
import photo from "../Assets/images/profile.jpg";

const Intro = () => {
  return (
    <div className="main">
      <img src={photo} alt="profile" className={classes.profilePhoto} />
      <h1 className={classes.name}>Suraj Biswas</h1>
      <p className={classes.selfTaught}>Self-taught Programmer</p>
    </div>
  );
};

export default Intro;
