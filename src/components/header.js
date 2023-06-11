import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = ({ onClickResume }) => {
  return (
    <nav className={classes.nav}>
      <div>
        <div className={classes["badge-name"]}></div>
        <h2 className={classes.name}>Hari Kumar Saini</h2>
        <p className={classes["name-title"]}>Web Developer</p>
      </div>
      <ul className={classes["ul-list"]}>
        <li className={classes["li-list"]}>
          <Link to="./components/Resume" className={classes["a-links"]} onClick={onClickResume}>
            Resume<span className={classes.span}>|</span>
          </Link>
        </li>
        <li className={classes["li-list"]}>
          <a href="#" className={classes["a-links"]}>
            Projects<span className={classes.span}>|</span>
          </a>
        </li>
        <li className={classes["li-list"]}>
          <a href="#" className={classes["a-links"]}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
