"use client";
import { usePathname, useRouter } from "next/navigation";
import style from "@/assets/css/schedule.module.css";
import { P2P, PortCall, VesselSchedule } from "@/components";
import Link from "next/link";
export default function Schedule() {
  const path = usePathname();
  const router = useRouter();
  const p2p = "/schedules/pointTopoint";
  const portCall = "/schedules/PortCalls";
  const vesselSchedule = "/schedules/VesselSchedules";
  let i = 0;

  return (
    <section className="pt-14">
      <div
        className={`flex flex-col justify-between items-start p-0 mb-3 border`}>
        <h2 className="text-2xl">Schedule</h2>
        <p>
          Search our extensive routes to find the schedule which fits your
          supply chain.
        </p>
        <ul
          className={`list-none flex relative justify-center items-center  ${style.ul}`}>
          <li
            className="min-w-[100px] p-1 px-2 cursor-pointer transition duration-500 border-b-blue-500 lg:hover:border-b-2"
            onClick={() => {
              router.push(p2p);
            }}>
            PointToPoint
          </li>
          <li
            className="min-w-[100px] p-1 px-2 cursor-pointer transition duration-500 border-b-blue-500 lg:hover:border-b-2"
            onClick={() => {
              router.push(portCall);
            }}>
            Port Calls
          </li>
          <li
            className="min-w-[100px] p-1 px-2 cursor-pointer transition duration-500 border-b-blue-500 lg:hover:border-b-2"
            onClick={() => {
              router.push(vesselSchedule);
            }}>
            Vesel schedule
          </li>
        </ul>
      </div>

      <div className={`w-screen flex`}>
        <div className="w-full h-auto py-5 lg:w-4/12">
          <PortCall />
        </div>
        <div className="col-12 col-md-8">{/* form will come here */}</div>
      </div>
    </section>
  );
}
