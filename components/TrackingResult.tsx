/** @format */
"use client";
import React, { useState } from "react";
import style from "../assets/css/tracking.module.css";
// import {ResultDetail} from "./index";
// {
//   id: 1,
//   stage: "Activity",
//   location: "location",
//   date: "Date",
//   status: "status",
// },

// const TrackedInfo = ({ data, i }) => {
//   data = data[0];
//   i = i - 1;
//   console.log('data from  info', data.status[i])
//    return (
//      <div className="td">
//        <div className="col-11 flex flex-column flex-sm-row">
//          <div className="col-12 col-sm-3">{data.activity[i]} </div>
//          <div className="col-12 col-sm-3">{data.location[i]}</div>
//          <div className="col-12 col-sm-3">{data.date[i]} 12:12</div>
//          <div
//            className={`col-12 col-sm-3 ${
//              data.status[i] ? "stat_msg1" : "stat_msg0"
//            }`}
//          >
//            {data.status[i]
//              ? `${data.activity[i]} completed`
//              : `${data.activity[i]} unsuccessful`}
//          </div>
//        </div>
//        <div className="col-4 font pl-1">
//          {data.status[i] ? (
//            <span className="fs-6">
//              completed <i className="mdi mdi-progress-check text-success"></i>
//            </span>
//          ) : (
//            <span className="fs-6">
//              pending{" "}
//              <i className="mdi mdi-alert-circle-outline text-danger"></i>
//            </span>
//          )}
//        </div>
//      </div>
//    );};
// const TrackingResult = ({ found }) => {
//   found = [found]
//   console.log(found[0])
//   const [active, setActive] = useState(false);
//   return (
//     <>
//       <div
//         className={`d-flex justify-content-center align-items-center ${style.head}`}
//       >
//         <button
//           className={active ? "inActive" : "active"}
//           onClick={() => {
//             active ? setActive(false) : setActive(true);
//           }}
//         >
//           overview
//         </button>
//         <button
//           className={active ? "active" : "inActive"}
//           onClick={() => {
//             active ? setActive(false) : setActive(true);
//           }}
//         >
//           detail view
//         </button>
//       </div>
//       {active ? (
//         <ResultDetail found={found} />
//       ) : (
//         <div className="table my-5">
//             {found[0].activity && found[0].activity.map((data, i = 0) => {
//               i++
//               return (
//                 <div className="row tr" key={data}>
//                   <TrackedInfo data={found} i={i} />
//                 </div>
//               )
//             })}
//         </div>
//       )}
//     </>
//   );
// };
interface IProp {
  found: {
    tracking_id: string;
    package: string;
  };
}
const TrackingResult = ({ found }: IProp) => {
  const routeMapping = [
    {
      id: 1,
      stage: "out for delivery",
      location: "accra",
      date: "12/12/2022",
      status: 0,
    },
    {
      id: 2,
      stage: "package shipped",
      location: "shangai",
      date: "12/12/2022",
      status: 1,
    },
    {
      id: 3,
      stage: "restructuring and labeling",
      location: "shangai/forth court",
      date: "12/12/2022",
      status: 1,
    },
    {
      id: 4,
      stage: "boxing and packaging",
      location: "shangai",
      date: "12/12/2022",
      status: 1,
    },
  ];
  let a = [1, 2, 3, 4];
  return (
    <section className="w-screen relative overflow-auto overscroll-auto">
      <div className="w-[700px] h-14 flex items-center bg-violet-400 rounded-t-md text-white ">
        <span className="h-14 px-2 flex-1 flex items-center">Date</span>
        <span className="h-14 px-2 flex-1 flex items-center">location</span>
        <span className="h-14 px-2 flex-1 flex items-center">Event</span>
      </div>
      <div>
        {routeMapping.map((routeEvent) => (
          <div className="w-[700px] h-auto border-b flex" key={routeEvent.id}>
            <span className="h-14 px-2 flex-1 flex items-center">
              {routeEvent.date}
            </span>
            <span className="h-14 px-2 flex-1 flex items-center">
              {routeEvent.location}
            </span>
            <span className="h-14 px-2 flex-1 flex items-center">
              {routeEvent.stage}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TrackingResult;
