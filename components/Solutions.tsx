import React from "react";
import Image from "next/image";
import { solutions } from "@/constants";

export default function Solutions() {
  return (
    <section
      className="relative w-full h-auto flex flex-col lg:min-h-screen lg:px-5"
      id="solutions">
      <div className="w-full h-auto flex flex-col text-center items-center justify-center py-10 lg:py-30">
        <h1 className="h-1/6 text-3xl capitalize font-normal text-cyan-800 lg:font-bold">
          Our solutions
        </h1>
        <p className="padding-x pt-5 lg:px-40 lg:pt-10">
        As well as being a global leader in container shipping , our worldwide teams of industry specific experts mean we can offer our customers round-the-clock personalised service. This ensures we deliver fast and reliable transit times, and that we provide the best solutions for your needs. 
        </p>
      </div>
      <div className="w-full h-[50vh] relative lg:px-5 lg:h-[70vh]">
        {/* <Image src="/cargoTrain1.jpg" fill alt="solutions" /> */}

        <div className="solutions h-full w-full relative flex flex-col text-white top-0 left-0  gap-2 lg:flex-row">
          {solutions.map((solution) => (
            <div
              className={`${solution.id} flex-1 w-full capitalize px-3 text-sm flex gap-5 justify-start items-center relative z-20 before:absolute before:right-0 before:bottom-0 before:left-0 before:top-0 before:bg-neutral-900 before:opacity-20 before:-z-10 before:transition before:delay-100 before:duration-700 before:content[''] lg:before:opacity-50 lg:flex-col lg:pt-36 lg:text-lg lg:px-0   lg:hover:before:opacity-90`}
              key={solution.title}>
              <span className="solution__icon transition duration-700 delay-100 w-10 h-10 lg:w-14 lg:h-14 relative">
                <Image
                  className=" text-white"
                  src={solution.logo}
                  fill
                  alt="solutions "
                />
              </span>
              <p>{solution.title}</p>
            </div>
          ))}
        </div>

      </div>
      <div className="w-full h-[20vh] flex text-center items-center justify-center lg:py-5">
        <span className="w-6/12 h-12 flex text-center items-center justify-center text-sm border-2 border-cyan-900 capitalize rounded-full transition delay-50 duration-500 lg:w-2/12 hover:bg-cyan-900 hover:text-white">
          See All Solutions
        </span>
      </div>
    </section>
  );
}
