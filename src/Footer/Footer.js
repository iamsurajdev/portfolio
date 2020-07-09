import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.main}>
      Made with{" "}
      <span role="img" aria-label="smile">
        💕
      </span>{" "}
      by{" "}
      <a
        href="https://www.linkedin.com/in/suraj-biswas-824bb4176/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        Suraj Biswas
      </a>{" "}
      © 2020. Built with{" "}
      <a
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        ReactJS
      </a>{" "}
      , deployed on{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        Netlify
      </a>
    </div>
  );
};

export default Footer;
