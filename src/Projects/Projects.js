import React from "react";
import classes from "./Projects.module.css";
import Card from "../UI/Card/Card";

// for testing will change after testing
import coronaTrackerPhoto from "../Assets/images/photoForProjects/coronaTracker.png";
import colorlyPhoto from "../Assets/images/photoForProjects/colorly.png";
import CakeshopPhoto from "../Assets/images/photoForProjects/Cakeshop.png";

const Projects = () => {
  return (
    <div className={classes.main}>
      <div className={classes.heading}>
        <h1>My Projects</h1>
      </div>
      <div className={classes.cardsDiv}>
        <Card
          imgUrl={coronaTrackerPhoto}
          haveWebsite={true}
          haveGithub={true}
          description="This website i build with an public API. It shows all deaths recoveries and current infected people, Globally and Country wise. In this website you can see data through numbers and charts."
          websiteUrl="https://coronatrackerbysurajdev.netlify.app/"
          gitHubUrl="https://github.com/surajbiswas367/corona-tracker-"
          projectName="Corona Tracker App"
        />
        <Card
          imgUrl={colorlyPhoto}
          haveWebsite={true}
          haveGithub={true}
          description="Colorly is all in one colour picker, you can make custom colours or pick popular colours or take colours from shade cards also"
          websiteUrl="https://colorlyui.netlify.app/"
          gitHubUrl="https://github.com/surajbiswas367/Colorly"
          projectName="Colorly"
        />
        <Card
          imgUrl={CakeshopPhoto}
          haveWebsite={false}
          haveGithub={true}
          description="A simple e-commerce app for cake shop with reactjs,redux and nodejs,express,mongoDB below github link for frontend repo you can find the backend repo in the about section of the frontend repo"
          gitHubUrl="https://github.com/surajbiswas367/Colorly"
          projectName="Cake Shop"
        />
      </div>
      <div className={classes.hopeDiv}>
        <h2>
          More projects will come real soon
          <span role="img" aria-label="smile">
            😄
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Projects;
