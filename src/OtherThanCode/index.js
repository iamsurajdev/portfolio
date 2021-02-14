import React from "react";
import classes from "./OtherThanCode.module.css";
import BlogImage from "../Assets/images/DecorativeImages/Blog.png";

const OtherThanCode = () => {
  return (
    <div className={classes.main}>
      <div className={classes.imgDiv}>
        <img src={BlogImage} alt="blog" />
      </div>
      <div className={classes.component}>
        <h1>Things i do other than code</h1>
        <div className={classes.sideNoteDiv}>
          <p>
            <strong>
              Read Books, Listen various types of music, Learn random things
            </strong>{" "}
            <br />
            Other than above things I like Art, Human biology, Producing music,
            Indian Mysticism, computer hardware, Investments/Stocks etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherThanCode;
