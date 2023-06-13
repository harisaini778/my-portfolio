import React from "react";
import { Link } from "react-router-dom";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className={classes["body-main"]}>
      <div className={classes["body-img"]}></div>
      <div>
        <h1 className={classes["greetings"]}>Hello</h1>
        <h4 className={classes.about}>A Bit About Me</h4>
        <p className={classes["about-des"]}>
          I am a front-end developer dedicated to creating engaging web experiences. With a passion for design and a focus
          on user-friendly interfaces, I bring ideas to life and deliver visually appealing solutions. I stay updated
          with industry trends to ensure modern and impactful designs. My attention to detail and commitment to exceptional
          user experiences drive my work.
        </p>
      </div>
      <Link to="/components/Resume" className={classes["resume-circle"]}>
        Resume
      </Link>
      <Link to="/components/Project" className={classes["resume-projects"]}>
        Projects
      </Link>
      <Link to="/contact" className={classes["resume-contacts"]}>
        Contact
      </Link>
    </div>
  );
};

export default Body;
