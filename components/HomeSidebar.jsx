/** @format */

import React, {useContext, useState, useEffect} from "react";
import style from "../assets/css/homeNav.module.css";
import {LinksContext} from "../views/Home";

const HomeSidebar = ({show}) => {
  // useEffect(() => {
  // console.log('sidebar', show)

  // }, [show])

  return (
    <div
      className={`${style.sidebar_wrapper} ${
        show ? `${style.show}` : `${style.hide}`
      }`}
    >
      <ul className={style.sidebar_ul}>
        <li className={`${style.sidebar_item} ${style.active}`}>
          <i className="mdi mdi-view-dashboard"></i>
          <span>dashboard</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>
        <li className={style.sidebar_item}>
          <i className=" mdi mdi-airplane-takeoff"></i>
          <span>shipments</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>
        <li className={style.sidebar_item}>
          <i className="mdi mdi-layers"></i>
          <span>transactions</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>
        <li className={style.sidebar_item}>
          <i className="mdi mdi-bio"></i>
          <span>import</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>
        <li className={style.sidebar_item}>
          <i className="mdi mdi-bio"></i>
          <span>export</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>
        <li className={style.sidebar_item}>
          <i className=" mdi mdi-barcode"></i>
          <span>generate barcode</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>
        <li className={style.sidebar_item}>
          <i className=" mdi mdi-archive"></i>
          <span>archive</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>
        <li className={style.sidebar_item}>
          <i className="mdi mdi-settings-outline"></i>
          <span>settings</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>
      </ul>
    </div>
  );
};

export default HomeSidebar;
