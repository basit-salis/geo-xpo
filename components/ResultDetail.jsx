/** @format */

import React, {useState, useEffect} from "react";
import style from "../assets/css/tracking.module.css";
import {goodsByTrackingNumber} from "../utils/api";

const TrackedInfo = ({data, i}) => {
  data = data[0];
  i = i - 1;
  console.log("data from  info", data.status[i]);
  return (
    <div className="td">
      <div className="col-11 flex flex-column flex-sm-row">
        <div className="col-12 col-sm-3">{data.activity[i]} </div>
        <div className="col-12 col-sm-3">{data.location[i]}</div>
        <div className="col-12 col-sm-3">{data.date[i]} 12:12</div>
        <div
          className={`col-12 col-sm-3 ${
            data.status[i] ? "stat_msg1" : "stat_msg0"
          }`}
        >
          {data.status[i]
            ? `${data.activity[i]} completed`
            : `${data.activity[i]} unsuccessful`}
        </div>
      </div>
      <div className="col-4 font pl-1">
        {data.status[i] ? (
          <span className="fs-6">
            completed <i className="mdi mdi-progress-check text-success"></i>
          </span>
        ) : (
          <span className="fs-6">
            pending <i className="mdi mdi-alert-circle-outline text-danger"></i>
          </span>
        )}
      </div>
    </div>
  );
};
const ResultDetail = ({found}) => {
  // const [active, setActive] = useState(false);
  const [goods, setGoods] = useState({});
  useEffect(() => {
    const trackedDetail = async () => {
      const response = await goodsByTrackingNumber("1234");
      console.log("goods", response);
      setGoods(response);
    };
    trackedDetail();
  }, []);
  console.log(found);
  return (
    <>
      <div className="table my-5">
        {found[0].activity &&
          found[0].activity.map((data, i = 0) => {
            i++;
            return (
              <div className="row tr" key={data}>
                <TrackedInfo data={found} i={i} />
              </div>
            );
          })}
      </div>

      <div
        className={`row ${
          found[0].tracking_id !== undefined
            ? `${style.tracked}`
            : `${style.hide}`
        } `}
      >
        <h2 className="fs-2 fw-bold">Details</h2>

        <div className="col-12">
          <p>Tracking id: {goods.tracking_id}</p>
        </div>
        <div className="col-12 col-md-4">
          container: <span>{goods.container_name}</span>
        </div>
        <div className="col-12 col-md-4">
          cargo type: <span>{goods.cargo_type}</span>
        </div>
        <div className="col-12 col-md-4">
          items: <span>{goods.items}</span>
          {/* {goods.items.map(item => <span>{item}</span>)} */}
        </div>
        <div className="col-12 col-md-4">
          sender name: <span>{goods.sender_name}</span>
        </div>
        <div className="col-12 col-md-4">
          sender Addr: <span>{goods.sender_address}</span>
        </div>
        <div className="col-12 col-md-4">
          sender city: <span>{goods.sender_address}</span>
        </div>
        <div className="col-12 col-md-4">
          recipient name: <span>{goods.recipient_name}</span>
        </div>

        <div className="col-12 col-md-4">
          recipient Addr: <span>{goods.recipient_address}</span>
        </div>

        <div className="col-12 col-md-4">
          recipient city: <span>{goods.recipient_address}</span>
        </div>
        <div className="col-12 col-md-4">
          estimated Arrival: <span>{goods.date_departed}</span>
        </div>
        <div className="col-12 col-md-4">
          Departed: <span>{goods.date_departed}</span>
        </div>
        <div className="col-12 col-md-4">
          status: <span>{found[0].status[-1] ? "arrived" : "ongoing"}</span>
        </div>
      </div>
    </>
  );
};

export default ResultDetail;
