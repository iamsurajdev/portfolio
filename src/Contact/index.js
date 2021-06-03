import React from "react";
import classes from "./Contact.module.css";
import { Icon } from "@iconify/react";
import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled";
import githubOutlined from "@iconify/icons-ant-design/github-outlined";
import instagramFilled from "@iconify/icons-ant-design/instagram-filled";
import youtubeFilled from "@iconify/icons-ant-design/youtube-filled";
import mediumCircleFilled from "@iconify-icons/ant-design/medium-circle-filled";

const Contact = () => {
  return (
    <div className={classes.main}>
      {/* heading */}
      <h1>Contact me </h1>

      {/* personal contact */}
      <div className={classes.personalInfoDiv}>
        <p>
          {" "}
          <span role="img" aria-label="smile">
            📧
          </span>
          :
          <a href="mailto: surajbiswas367@gmail.com">
            surajbiswas367@gmail.com
          </a>
          /{" "}
          <span role="img" aria-label="smile">
            ☎️
          </span>
          : +91 8017378004
        </p>
      </div>

      {/* amazing text  */}
      <div className={classes.text}>
        {" "}
        Have an opportunity for me, want to discuss any project, or Interested
        in working together? <br /> Feel free to reach out to me in any case{" "}
        <span role="img" aria-label="smile">
          😉
        </span>{" "}
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
          href="https://github.com/iamsurajdev"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.icon}
        >
          <Icon icon={githubOutlined} />
        </a>

        <a
          href="https://www.instagram.com/iamsuraj_dev/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.icon}
        >
          <Icon icon={instagramFilled} />
        </a>

        <a
          href="https://www.youtube.com/channel/UClS_wbN0kW0KtVop9EgZLAg"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.icon}
        >
          <Icon icon={youtubeFilled} />
        </a>
        <a
          href="https://medium.com/@iamsurajdev"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.icon}
        >
          <Icon icon={mediumCircleFilled} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
