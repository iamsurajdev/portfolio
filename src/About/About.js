import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.main}>
      <div className={classes.textContent}>
        <h1 className={classes.heading}>About Me</h1>
      </div>
      <div className={classes.illustration}>
        <h1>illustration</h1>
      </div>
    </div>
  );
};

export default About;
