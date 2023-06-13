import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
          <div className="contact-items items-right">
                <ul className="static-contact-details">
              <li className="static-contact-details-list"><h1>Contact</h1>
             <p>Looking forward to hearing from you</p>
              </li> 
              <li className="static-contact-details-list">
            <h3>Email</h3>
                      <p>harikumarsaini778@gmail.com</p>
                  </li>
                  <li className="static-contact-details-list">
              <h3>Phone</h3>
                      <p>+91-7985027344</p>
                      </li>
             </ul>
      </div>
      <div className="contact-items items-left">
        <form className="contact-form">
          <div className="contact-form">
  <div className="form-row">
    <div className="form-column">
      <label htmlFor="fname">First Name</label>
      <input type="text" id="fname" />
    </div>
    <div className="form-column">
      <label htmlFor="lname">Last Name</label>
      <input type="text" id="lname" />
    </div>
  </div>
  <div className="form-row">
    <div className="form-column">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />
    </div>
    <div className="form-column">
      <label htmlFor="number">Contact Number</label>
      <input type="number" id="number" />
    </div>
  </div>
  <div className="form-row">
    <div className="form-column">
      <label htmlFor="text-box">Message</label>
      <textarea id="text-box" rows="4"></textarea>
    </div>
  </div>
  <button>Submit</button>
</div>

        </form>
      </div>
    </div>
  );
};

export default Contact;
