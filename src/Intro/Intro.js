import React from "react";
import classes from "./Intro.module.css";
import photo from "../Assets/images/profile.jpg";

const Intro = () => {
  return (
    <div className="main">
      <img src={photo} alt="photo" className={classes.profilePhoto} />
      <h1 className={classes.name}>Suraj Biswas</h1>
    </div>
  );
};

export default Intro;
