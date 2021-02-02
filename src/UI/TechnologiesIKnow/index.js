import React from "react";
import classes from "./TechnologiesIKnow.module.css";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
// import expressIcon from "@iconify/icons-logos/express";
// import mongodbIcon from "@iconify/icons-logos/mongodb";
// import reduxIcon from "@iconify/icons-logos/redux";
import javascriptIcon from "@iconify/icons-logos/javascript";
// import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
// import html5 from "@iconify/icons-logos/html-5";
// import css3 from "@iconify/icons-logos/css-3";
// import bootstrapIcon from "@iconify/icons-logos/bootstrap";

const TechnologiesIKnow = () => {
  return (
    <div className={classes.technologies}>
      <div>
        <Icon className={classes.Icon} icon={reactIcon} />
        <span className={classes.technologyNames}> - ReactJs</span>
      </div>
      <div>
        <Icon className={classes.Icon} icon={javascriptIcon} />
        <span className={classes.technologyNames}> - JavaScript(Es6)</span>
      </div>
    </div>
  );
};

export default TechnologiesIKnow;
