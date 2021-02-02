import React from "react";
import classes from "./About.module.css";
import AboutMeImage from "../Assets/images/DecorativeImages/AboutMe.png";

const About = () => {
  return (
    <div className={classes.main}>
      <div className={classes.textContent}>
        <h1 className={classes.heading}>
          Hi,I'm Suraj. Nice to meet you{" "}
          <span role="img" aria-label="smile">
            👋
          </span>
          .
        </h1>
        <p>
          I'm from Kolkata, India. I start learning programming from the start
          of 2020. From my childhood, I have a huge interest in technology, and
          when I first introduced to code my interest find a way to expand.
        </p>
        <p>
          As a self taught programmer, I have to learn everything by myself no
          college no teacher no friends from coding background. I have only one
          hope that i can become a Programmer. So it's not easy but not
          impossible. I hope people in future time take self-taught as an option
          of learning.
        </p>
        <p>
          Other than code, i love to create, learn, and teach people. Other than
          code I like Art, Human biology, Producing music, Indian Mysticism,
          computer hardware.
        </p>
      </div>
      <div className={classes.illustration}>
        <img src={AboutMeImage} alt="AboutMeImage" />
      </div>
    </div>
  );
};

export default About;
