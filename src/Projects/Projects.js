import React from "react";
import classes from "./Projects.module.css";
import Card from "../UI/Card/Card";

// for testing will change after testing
import coronaTrackerPhoto from "../Assets/images/photoForProjects/coronaTracker.png";
import colorlyPhoto from "../Assets/images/photoForProjects/colorly.png";

const Projects = () => {
  return (
    <div className={classes.main}>
      <div className={classes.heading}>
        <h1>My Projects</h1>
      </div>
      <div className={classes.cardsDiv}>
        <Card
          imgUrl={coronaTrackerPhoto}
          description="This website i build with an public API. It shows all deaths recoveries and current infected people, Globally and Country wise. In this website you can see data through numbers and charts."
          websiteUrl="https://coronatrackerbysurajdev.netlify.app/"
          gitHubUrl="https://github.com/surajbiswas367/corona-tracker-"
          projectName="Corona Tracker App"
        />
        <Card
          imgUrl={colorlyPhoto}
          description="Colorly is all in one colour picker, you can make custom colours or pick popular colours or take colours from shade cards also"
          websiteUrl="https://colorlybysurajdev.netlify.app/"
          gitHubUrl="https://github.com/surajbiswas367/Colorly"
          projectName="Colorly"
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
