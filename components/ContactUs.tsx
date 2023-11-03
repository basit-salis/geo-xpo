/** @format */

import React from "react";
import style from "../assets/css/hero.module.css";
const Contactus = () => {
  return (
    <div className={`d-flex justify-content-center align-items-center flex-column gap-2 ${style.contact_us}`}>
      <h5>Contact us</h5>
      <p>leave us a message we will get right back to you!</p>

      <input
        type="text"
        name="name"
        id="name"
        className={`form-control ${style.form}`}
        placeholder="name"
      />
      <input
        type="email"
        name="email"
        id="email"
        className={`form-control  ${style.form}`}
        placeholder="email"
      />
      <textarea
        name="message"
        id="message"
        className={`form-control  ${style.form_area}`}
        placeholder="message"
      ></textarea>
      <button className={style.contact_btn}>send</button>
    </div>
  );
};

export default Contactus;
