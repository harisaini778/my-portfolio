import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div className={classes["footer-body"]}>
             <hr className={classes.linebreak} />
            <ul className={classes["footer-list-ul"]}>
                <li>Phone Number : 
                    <br/>
                    +91-7985027344
                </li>
                <li >Email :
                    <br />
                    harikumarsaini778@gmail.com
                </li>
                <li>
                    Follow Me :
                    <br />
                    <ul className={classes.icon}>
                    <a href=""><div>  <FontAwesomeIcon icon={faFacebook} /></div></a>
                    <a href=""> <div>  <FontAwesomeIcon icon={faInstagram} /></div></a>
                    <a href=""> <div>  <FontAwesomeIcon icon={faLinkedinIn} /></div></a>
                    <a href=""> <div>  <FontAwesomeIcon icon={faWhatsapp} /></div></a>
                    </ul>
                </li>
            </ul>
        </div>
    );

}
export default Footer;