import React from "react";
import classes from "./Technologies.module.css";
import TechnologiesSvg from "../UI/TechnologiesSvg";
import TechnologiesIKnow from "../UI/TechnologiesIKnow/TechnologiesIKnow";

const Technologies = () => {
  return (
    <div className={classes.main}>
      <div className={classes.illustration}>
        <TechnologiesSvg />
      </div>
      <div className={classes.textContent}>
        <div className={classes.headings}>
          <h1>Technologies</h1>
          <p>I am Comfortable with</p>
        </div>
        <TechnologiesIKnow />
      </div>
    </div>
  );
};

export default Technologies;
