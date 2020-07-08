import React from "react";
import classes from "./About.module.css";
import AboutMeImage from "../Assets/images/projectPictures/AboutMe.png";

const About = () => {
  return (
    <div className={classes.main}>
      <div className={classes.textContent}>
        <h1 className={classes.heading}>Hi,I'm Suraj. Nice to meet you.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt
          est necessitatibus autem accusamus eaque veritatis culpa, fuga
          temporibus nisi qui voluptatem, consequatur quasi nostrum reiciendis
          perferendis nemo quia nihil consectetur modi, reprehenderit et illum
          provident! Nostrum mollitia officiis non! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam sunt est necessitatibus autem
          accusamus eaque veritatis culpa, fuga temporibus nisi qui voluptatem,
          consequatur quasi nostrum reiciendis perferendis nemo quia nihil
          consectetur modi, reprehenderit et illum provident! Nostrum mollitia
          officiis non! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam sunt est necessitatibus autem accusamus eaque veritatis culpa,
          fuga temporibus
        </p>
      </div>
      <div className={classes.illustration}>
        <img src={AboutMeImage} alt="AboutMeImage" />
      </div>
    </div>
  );
};

export default About;
