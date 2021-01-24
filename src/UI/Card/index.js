import React from "react";
import classes from "./Card.module.css";
import { Icon } from "@iconify/react";
import githubOutlined from "@iconify/icons-ant-design/github-outlined";
import adminSiteAlt3 from "@iconify/icons-dashicons/admin-site-alt3";
const Card = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        {/* image section */}
        <div className={classes.imgDiv}>
          <img src={props.imgUrl} alt="cardImage" />
        </div>
        {/* overlay section */}
        <div className={classes.overlay}>
          <p className={classes.description}>{props.description}</p>
          <div className={classes.linksDiv}>
            {props.haveWebsite && (
              <a
                className={classes.links}
                href={props.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={adminSiteAlt3} />
              </a>
            )}
            {props.haveGithub && (
              <a
                className={classes.links}
                href={props.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={githubOutlined} />
              </a>
            )}
          </div>
        </div>
      </div>
      {/* Project name */}
      <h2 className={classes.projectName}>{props.projectName}</h2>
    </div>
  );
};

export default Card;
