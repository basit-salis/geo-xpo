import React from 'react'
import style from "../assets/css/schedule.module.css";

const VesselSchedule = () => {
  return (
      <form action="" className={`w-full h-full py-5 flex flex-col justify-center items-center lg:bg-white lg:shadow-md  lg:border lg:rounded-lg lg:ml-5 ${style.form}`}>
        <div className="mb-3">
          <label htmlFor="country">Vessel name</label>
          <input type="text" placeholder='enter vercel name'/>
        </div>
     
        <div className=" mb-3">
          <label htmlFor="country">Date</label>
          <input type="date" />
        </div>
        <button className={style.btn}>search</button>
      </form>
  );
}

export default VesselSchedule