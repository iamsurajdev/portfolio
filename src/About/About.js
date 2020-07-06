import React from "react";
import classes from "./About.module.css";
import AboutMeSvg from "../UI/AboutMeSvg";

const About = () => {
  return (
    <div className={classes.main}>
      <div className={classes.textContent}>
        <h1 className={classes.heading}>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt
          est necessitatibus autem accusamus eaque veritatis culpa, fuga
          temporibus nisi qui voluptatem, consequatur quasi nostrum reiciendis
          perferendis nemo quia nihil consectetur modi, reprehenderit et illum
          provident! Nostrum mollitia officiis non!
        </p>
      </div>
      <div className={classes.illustration}>
        <AboutMeSvg />
      </div>
    </div>
  );
};

export default About;
