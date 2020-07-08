import React from "react";
import classes from "./Projects.module.css";
import Card from "../UI/Card/Card";

// for testing will change after testing
import photo from "../Assets/images/myAvatar.png";

const Projects = () => {
  return (
    <div className={classes.main}>
      <div className={classes.heading}>
        <h1>My Projects</h1>
      </div>
      <div className={classes.cardsDiv}>
        <Card
          imgUrl={photo}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
        consectetur numquam consequuntur eligendi, tempora doloribus labore
        delectus tempore rem? Eaque."
          websiteUrl="https://www.google.com/"
          gitHubUrl="https://github.com/surajbiswas367"
          projectName="First Project"
        />
        <Card
          imgUrl={photo}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
        consectetur numquam consequuntur eligendi, tempora doloribus labore
        delectus tempore rem? Eaque."
          websiteUrl="https://www.google.com/"
          gitHubUrl="https://github.com/surajbiswas367"
          projectName="First Project"
        />
        <Card
          imgUrl={photo}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
        consectetur numquam consequuntur eligendi, tempora doloribus labore
        delectus tempore rem? Eaque."
          websiteUrl="https://www.google.com/"
          gitHubUrl="https://github.com/surajbiswas367"
          projectName="First Project"
        />
        <Card
          imgUrl={photo}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
        consectetur numquam consequuntur eligendi, tempora doloribus labore
        delectus tempore rem? Eaque."
          websiteUrl="https://www.google.com/"
          gitHubUrl="https://github.com/surajbiswas367"
          projectName="First Project"
        />
        <Card
          imgUrl={photo}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
        consectetur numquam consequuntur eligendi, tempora doloribus labore
        delectus tempore rem? Eaque."
          websiteUrl="https://www.google.com/"
          gitHubUrl="https://github.com/surajbiswas367"
          projectName="First Project"
        />
      </div>
    </div>
  );
};

export default Projects;
