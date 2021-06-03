import React, { useEffect, useState } from "react";
import classes from "./Intro.module.css";
import photo from "../Assets/images/profilePhoto.png";
import axios from "axios";

const Intro = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [capCityName, setCapCityName] = useState(null);

  useEffect(() => {
    axios
      .get("https://geolocation-db.com/json/")
      .then((result) => {
        console.log(result);
        setLocationInfo(result.data);
        capitalize(result.data.city);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const capitalize = (name) => {
    const arrOfWords = name.split(" ");
    const arrOfWordsCased = [];

    for (let i = 0; i < arrOfWords.length; i++) {
      const word = arrOfWords[i];
      arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
    console.log(arrOfWordsCased);

    setCapCityName(arrOfWordsCased.join(" "));
  };

  return (
    <div className={classes.main}>
      <img src={photo} alt="profile" className={classes.profilePhoto} />
      <p className={classes.introText}>
        A Self-taught Programmer, Who{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        to code.
      </p>
      <p className={classes.welcomeText}>
        Welcome to my Portfolio{" "}
        <span role="img" aria-label="smile">
          😊
        </span>{" "}
        , How is the weather{" "}
        <span role="img" aria-label="smile">
          🌤️
        </span>{" "}
        in{" "}
        {locationInfo && capCityName
          ? capCityName + "(" + locationInfo.country_code + ")"
          : "your city"}{" "}
        ?
      </p>
    </div>
  );
};

export default Intro;
