import React from "react";
import style from "../assets/css/schedule.module.css";

export default function PortCalll() {
  let i = 0;
  return (
    <form
      action=""
      className={`w-full h-full py-5 flex flex-col justify-center items-center lg:bg-white lg:shadow-md  lg:border lg:rounded-lg lg:ml-5 ${style.form}`}>
      <div className="form-group mb-3">
        <label htmlFor="country">Country</label>
        <input type="text" placeholder="enter country" />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="country">Port</label>
        <input type="date" placeholder="dd/mm/yyyy" />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="country">Date</label>
        <input type="date" placeholder="dd/mm/yyyy" />
      </div>
      <button className={style.btn}>search</button>
    </form>
  );
}
