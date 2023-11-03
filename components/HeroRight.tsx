import Link from "next/link";
import React from "react";

export default function HeroRight() {
  return (
    <div className="w-full h-full lowercase text-lg flex flex-col justify-center items-center rounded-lg z-10 relative before:absolute before:rounded-lg before:right-0 before:bottom-0 before:left-0 before:top-0 before:bg-slate-50 before:opacity-100 before:-z-10 before:content[''] lg:w-4/5 lg:h-64 lg:mb-5 lg:p-5 ">
      <div className="w-full flex justify-evenly items-center font-lighter h-[30%] lg:[20%]">
        <Link href="/" className=" hover:border-b-2 border-b-blue-300">
          tracking
        </Link>
        <Link href="/" className=" hover:border-b-2 border-b-blue-300">
          schedule
        </Link>
        <Link href="/" className=" hover:border-b-2 border-b-blue-300">
          contact
        </Link>
      </div>

      <div className="w-full h-[70%] px-7 font-thin flex flex-col gap-4 lg:[80%]">
        {/* contain clcikc */}
        <span className="w-full flex items-center text-lg gap-2">
          <input type="radio" className="w-5 h-5" />
          <p> Container Bill of Lading Number</p>
        </span>
        <span className="flex items-center text-lg gap-2">
          <input type="radio" className="w-5 h-5" /> <p> Booking Number</p>
        </span>
        <input
          type="text"
          className="w-full h-16 text-lg bg-slate-200 border border-slate-100 rounded-lg p-2 px-3"
          placeholder="enter a tracking id"
        />
      </div>
    </div>
  );
}
