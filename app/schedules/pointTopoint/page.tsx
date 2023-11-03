"use client";
import { usePathname, useRouter } from "next/navigation";
import style from "@/assets/css/schedule.module.css";
import { P2P, PortCall, VesselSchedule } from "@/components";
import Link from "next/link";
import { useState } from "react";
export default function Schedule() {
  const [scheduleType, setScheduleType] = useState(1);
  const path = usePathname();
  const router = useRouter();
  const p2p = "/schedules/pointTopoint";
  const portCall = "/schedules/PortCalls";
  const vesselSchedule = "/schedules/VesselSchedules";
  let i = 0;

  return (
    <section className="bg-neutral-100 pt-14">
      <div
        className={`flex flex-col justify-between items-start pt-3 px-3 mb-3 gap-2 border`}>
        <h2 className="text-2xl lg:text-4xl">Schedule</h2>
        <p className="font-thin">
          Search our extensive routes to find the schedule which fits your
          supply chain.
        </p>
        <ul
          className={`h-8 list-none flex relative justify-center items-center  ${style.ul}`}>
          <li
            className="min-w-[100px] h-full cursor-pointer transition duration-500 border-b-blue-500 lg:hover:border-b-2"
            onClick={() => {
              // router.push(p2p);
              setScheduleType(1)
            }}>
            PointToPoint
          </li>
          <li
            className="min-w-[100px] h-full px-2 cursor-pointer transition duration-500 text-center border-b-blue-500 lg:hover:border-b-2"
            onClick={() => {
              // router.push(portCall);
              setScheduleType(2)
            }}>
            PortCalls
          </li>
          <li
            className="min-w-[100px] h-full px-2 cursor-pointer transition duration-500 border-b-blue-500 lg:hover:border-b-2"
            onClick={() => {
              // router.push(vesselSchedule);
              setScheduleType(3)

            }}>
            VeselSchedule
          </li>
        </ul>
      </div>

      <div className={`w-screen flex`}>
        <div className="w-full h-auto py-5 lg:w-3/12">
          {scheduleType === 1 ? (
            <P2P />
          ) : scheduleType === 2 ? (
            <PortCall />
          ) : scheduleType === 3 ? (
            <VesselSchedule />
          ) : null}
        </div>
        <div className="col-12 col-md-8">{/* form will come here */}</div>
      </div>
    </section>
  );
}
