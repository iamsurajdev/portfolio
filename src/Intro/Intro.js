import React from "react";
import classes from "./Intro.module.css";
import photo from "../Assets/images/myAvatar.png";
import resume from "../Assets/Resume/Suraj Biswas Resume.pdf";
import { Icon } from "@iconify/react";
import downloadIcon from "@iconify/icons-carbon/download";

const Intro = () => {
  return (
    <div className={classes.main}>
      <div className={classes.topBar}>
        <a href={resume} download>
          Resume <Icon icon={downloadIcon} />
        </a>
      </div>
      <img src={photo} alt="profile" className={classes.profilePhoto} />
      <p className={classes.introText}>
        A Self-taught Programmer, Who{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        to code.
      </p>
      <p className={classes.welcomeText}>
        Welcome to my Portfolio{" "}
        <span role="img" aria-label="smile">
          😊
        </span>
      </p>
    </div>
  );
};

export default Intro;
