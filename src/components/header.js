import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className={classes.nav}>
      <div>
        <div className={classes["badge-name"]}></div>
        <h2 className={classes.name}>Hari Kumar Saini</h2>
        <p className={classes["name-title"]}>Web Developer</p>
      </div>
          <ul className={classes["ul-list"]}>
            <li className={classes["li-list"]}>
          <Link to="/*" className={classes["a-links"]} onClick={props.onClickResume}>
            Home<span className={classes.span}>|</span>
          </Link>
        </li>
              <li className={classes["li-list"]}>
          <Link to="./components/Resume" className={classes["a-links"]} onClick={props.onClickResume}>
            Resume<span className={classes.span}>|</span>
          </Link>
        </li>
        <li className={classes["li-list"]}>
          {/* <a href="#" className={classes["a-links"]}>
            Projects<span className={classes.span}>|</span>
          </a> */}
            <Link to="./components/Project" className={classes["a-links"]} onClick={props.onClickProject}>
            Projects<span className={classes.span}>|</span>
          </Link>
        </li>
        <li className={classes["li-list"]}>
          {/* <a href="#" className={classes["a-links"]}>
            Contact
          </a> */}
         <Link to="./components/Contact" className={classes["a-links"]} onClick={props.onClickContact}>
            Contact<span className={classes.span}></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
