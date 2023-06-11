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
                    <p className={classes.footercontacts}>+91-7985027344</p>
                </li>
                <li >Email :
                    <br />
                    <p className={classes.footercontacts}>harikumarsaini778@gmail.com</p>
                </li>
                <li>
                    Follow Me :
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