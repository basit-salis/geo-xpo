"use client";
import React, { useState, useEffect } from "react";
import style from "@/assets/css/tracking.module.css";
// import {goodsByUserId, goodsByTrackingNumber} from "../utils/api";
// import {track_shipping} from "../utils/track";
import { TrackingResult } from "@/components";
import { shipment } from "@/constants";

export default function Tracking() {
  const [item, setItem] = useState("");
  const [cargo, setCargo] = useState("Ocean Cargo");
  const [found, setFound] = useState(false);
  let [inputset, setInputset] = useState(0);

  const [err, setErr] = useState("");
  const cargoSelected = [
    {
      head: " Shipment & Container Tracking",
      desc: "  Select your booking type from Ocean, Air or Less-than-container-load(LCL) and enter your tracking number.",
    },
    {
      head: "Cargo & Airway Bill (AWB) Tracking",
      desc: " Select your booking type from Ocean, Air or Less-than-container-load (LCL) and enter your tracking number.",
    },
    {
      head: "Less than Container Load (LCL) Container Tracking",
      desc: " Select your booking type from Ocean, Air or Less-than-container-load (LCL) and enter your tracking number.",
    },
  ];
  const trackItem = () => {
    if (item === "") {
      setErr("field can't be empty");
      setFound(false);
      return;
    }

    if (cargo.toLowerCase() === "ocean cargo" && item === "123") {
      setErr("");

      setFound((prev) => !prev);
    } else {
      setErr(
        "could not track any item with your tracking id, check id or cargo type"
      );
      setFound(false);
    }
  };

  useEffect(() => {
    if (cargo.toLowerCase() === "ocean cargo") {
      setInputset(0);
    }
    if (cargo.toLowerCase() === "air cargo") {
      setInputset(1);
    }
    if (cargo.toLowerCase() === "lcl cargo") {
      setInputset(2);
    }
  }, [cargo, inputset]);

  return (
    <div
      className={`flex flex-col pt-20 padding-x gap-2 font-sans ${style.tracking}`}>
      <h1 className="text-4xl">{cargoSelected[inputset].head}</h1>
      <p className="">{cargoSelected[inputset].desc}</p>
      <div
        className={`w-full flex flex-col gap-1 gap-y-2 lg:flex-row lg:w-3/5 lg:my-5 ${style.form}`}>
        <select
          name="cargo"
          className="w-full h-16 rounded-lg px-3 lg:h-14 lg:w-4/12"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}>
          <option>Ocean Cargo</option>
          <option>Air Cargo</option>
          <option>LCL Cargo</option>
        </select>
        <input
          type="text"
          value={item}
          className="w-full h-16 font rounded-lg px-3 border lg:h-14 lg:w-6/12"
          placeholder="B/L or container number"
          onChange={(e) => setItem(e.target.value)}
        />
        <button
          className={`w-full h-16 rounded-lg text-white bg-violet-400 lg:h-14 lg:w-2/12`}
          onClick={() => {
            trackItem();
          }}>
          Search
        </button>
      </div>
      <p style={{ color: "red", marginLeft: "15rem", fontSize: "10px" }}>
        {err}
      </p>

      <p className="font-light lg:font-thin ">
        Container number is made of 4 letters and 7 digits.
        <br /> Bill of Lading number consists of 9 characters.
      </p>

      <div className={style.tracking_result}>
        {/* tracking result */}
        {found && <TrackingResult found={shipment[0]} />}
      </div>
    </div>
  );
}
