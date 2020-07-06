import React from "react";
import classes from "./TechnologiesIKnow.module.css";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import reduxIcon from "@iconify/icons-logos/redux";
import javascriptIcon from "@iconify/icons-logos/javascript";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import html5 from "@iconify/icons-logos/html-5";
import css3 from "@iconify/icons-logos/css-3";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";

const TechnologiesIKnow = () => {
  return (
    <div className={classes.technologies}>
      <div>
        <Icon className={classes.Icon} icon={reactIcon} />
        <span className={classes.technologyNames}> - ReactJs</span>
      </div>
      <div>
        <Icon className={classes.Icon} icon={reduxIcon} />
        <span className={classes.technologyNames}> - Redux</span>
      </div>
      <div>
        <Icon className={classes.Icon} icon={javascriptIcon} />
        <span className={classes.technologyNames}> - JavaScript</span>
      </div>
      <div>
        <Icon className={classes.Icon} icon={nodejsIcon} />
        <span className={classes.technologyNames}> - NodeJs</span>
      </div>
      <div>
        <Icon className={classes.Icon} icon={html5} />
        <span className={classes.technologyNames}> - HTML</span>
      </div>
      <div>
        <Icon className={classes.Icon} icon={css3} />
        <span className={classes.technologyNames}> - CSS</span>
      </div>
      <div>
        <Icon className={classes.Icon} icon={bootstrapIcon} />
        <span className={classes.technologyNames}> - Bootstrap</span>
      </div>
    </div>
  );
};

export default TechnologiesIKnow;
