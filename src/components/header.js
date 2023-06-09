import React from "react";
import classes from "./header.module.css"

const Header = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <div className={classes["badge-name"]}></div>
                <h2 className={classes.name}>Hari Kumar Saini</h2>
                <p className={classes["name-title"]}>Front-End Developer*</p>
            </div>
            <ul className={classes["ul-list"]}>
                <li className={classes["li-list"]}><a href="#">Resume<span className={classes.span}>|</span></a></li>
                <li className={classes["li-list"]}><a href="#">Projects<span className={classes.span}>|</span></a></li>
                <li className={classes["li-list"]}><a href="#">Contact</a></li>
            </ul>
       </nav>
   ) 
}
export default Header;