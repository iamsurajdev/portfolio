import React from "react";
import classes from "./Work.module.css";

// import TechnologiesImage from "../Assets/images/DecorativeImages/Technology.png";

import TechnologiesIKnow from "../UI/TechnologiesIKnow";

const Work = () => {
  return (
    <div className={classes.main}>
      {/* <div className={classes.illustration}>
        <img src={TechnologiesImage} alt="TechnologiesImage" />
      </div> */}
      <div className={classes.textContent}>
        <div className={classes.textContentHelper}>
          <div className={classes.headings}>
            <h1>My tech stack</h1>
          </div>

          <TechnologiesIKnow />
        </div>
      </div>
    </div>
  );
};

export default Work;
