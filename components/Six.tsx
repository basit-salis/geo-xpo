import React from "react";
import Link from "next/link";

export default function Six() {
  return (
    <div className={`relative flex flex-col gap-2 mt-5 padding-x lg:px-40`}>
      <div className="w-full text-center text-cyan-800 normal-case text-2xl py-2">
        <h5 >Anything you need we are here to help</h5>
      </div>

      <div
        className={`w-full h-44 border shadow-sm bg-white rounded-sm flex flex-col justify-between items-center lg:flex-row`}>
        <div className={`h-[60%] flex justify-center items-center lg:h-full lg:basis-3/4`}>
          <span
            className={`basis-1/4 h-full  flex justify-center items-center text-[60px]`}>
            <i className="mdi mdi-map-search"></i>
          </span>
          <span className="text-sm h-full flex flex-col justify-center lg:basis-3/4">
            <h4>Ready to ship?</h4>
            <p>Look up rate for new shipment abd inland tariff</p>
          </span>
        </div>
        <div className="w-full h-[40%] flex justify-center items-center px-2 gap-2 lg:basis-1/4 lg:justify-end lg:h-full">
          <button className={`w-1/2 h-12 bg-cyan-900 text-white rounded-full lg:w-6/12`}>
            find a price
          </button>
            <button
              className={`w-1/2 h-12 border border-cyan-900 rounded-full lg:w-6/12`}>
              book now
            </button>
        </div>
      </div>

      <div
        className={`w-full h-44 flex justify-between items-center relative border shadow-sm bg-white rounded-sm`}>
    
     <div className="basis-3/4 flex justify-between items-center ">
     <span
          className={`basis-1/4 flex justify-center items-center text-[60px] px-2`}>
          <i className="mdi mdi-calendar-search"></i>
        </span>

        <span className="h-full basis-3/4 flex flex-col justify-center w-auto">
          <h4>Find a schedule</h4>
          <input
            type="text"
            className={`w-full h-12 border-b-2`}
            placeholder="( City, Country, Region )"
          />
        </span>

     </div>



        <span className="basis-1/4 flex justify-end px-2">
          <Link href="/schedule/PointToPoint">
            <button
              className={`w-20 h-12 border-cyan-900 rounded-full border`}>
              Next
            </button>
          </Link>
        </span>
      </div>

      <div className={`w-full h-56 flex flex-col justify-between items-center gap-1 p-2 border shadow-sm bg-white rounded-sm lg:flex-row lg:h-32 lg:gap-0`}>
        <span className={`relative lg:w-32 lg:left-24`}>need help?</span>
        <p className={`flex bg-neutral-200 rounded-xl justify-center items-center p-2 text-sm lg:px-10 lg:h-3/4 lg:w-8/12 lg:rounded-full`}>
          Our expects are at your disposal to answer your questions and help you
          find the right solution. Contact us and we will response as soon as
          possible
        </p>
        <Link href="/enquire" className={`w-full h-12 border  flex justify-center items-center relative rounded-full bg-cyan-900 text-white lg:right-10 lg:w-32 lg:h-10 lg:mr-5`}>
          Enquire
        </Link>
      </div>
    </div>
  );
}
