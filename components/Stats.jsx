/** @format */
import style from '../assets/css/home.module.css'

import React from "react";


const Stats = ({data}) => {
    return (
      <div
        className={style.stats_card}
        style={{backgroundColor: `${data.color}`}}
      >
        <p>{data.stat_name}</p>
        {/* <p>{data.color}</p> */}
        <span>
          <h3>{data.no}</h3>
          <p>{data.cod}.</p>
        </span>
      </div>
    );
};

export default Stats;
