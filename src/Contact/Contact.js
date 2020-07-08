import React from "react";
import classes from "./Contact.module.css";
import { Icon } from "@iconify/react";
import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled";
import githubOutlined from "@iconify/icons-ant-design/github-outlined";
import instagramFilled from "@iconify/icons-ant-design/instagram-filled";

const Contact = () => {
  return (
    <div className={classes.main}>
      {/* heading */}
      <h1>Contact me </h1>

      {/* personal contact */}
      <div className={classes.personalInfoDiv}>
        <p>E-mail: surajbiswas367@gmail.com / Mobile: +91 8017378004</p>
      </div>

      {/* amening text  */}
      <div className={classes.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nihil
        labore vitae blanditiis amet omnis natus quibusdam exercitationem atque
        optio!
      </div>

      {/* icons  */}
      <div className={classes.iconContainer}>
        <a
          href="https://www.linkedin.com/in/suraj-biswas-824bb4176/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.icon}
        >
          <Icon icon={linkedinFilled} />
        </a>
        <a
          href="https://github.com/surajbiswas367"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.icon}
        >
          <Icon icon={githubOutlined} />
        </a>

        <a
          href="https://www.instagram.com/iamsuraj.pt/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.icon}
        >
          <Icon icon={instagramFilled} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
