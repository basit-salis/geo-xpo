import React from "react";
import { HeroRight } from "@/components";

export default function Hero() {
  return (
    <section className="hero grayscale-[20%] bg-right leading-tight px-3 pt-10 w-full h-[140vh] text-lg font-normal  flex flex-col lg:text-xl lg:flex-row lg:h-screen lg:bg-center">
      <div className="w-full h-[60%] text-white flex flex-col justify-center items-center gap-3 text-left lg:h-full lg:pt-20 lg:text-left">
        <h1 className="text-4xl font-light font-mono normal-case lg:text-6xl" style={{fontFamily:" Colonna MT, Agency fb"}}>Propelled by ambition and green methanol</h1>
        <h3 className="w-full">Learn more about our journey towards net zero by 2040</h3>
        <p className="w-full pt-5">
        Register and you will soon be able to manage your logistics online.
        </p>

        <div className="w-full gap-2 flex text-center items-center justify-start lg:py-5">
        
        <span className="min-w-[50px] h-14 p-1 px-5 bg-white text-cyan-900 flex text-center items-center justify-center text-sm border-2 border-white capitalize rounded-full transition delay-50 duration-500 lg:w-3/12 hover:bg-transparent hover:text-white">
        Register
        </span>
        <span className="min-w-[50px] h-14 p-1 px-5 bg-transparent flex text-center items-center justify-center text-sm border-2 border-white capitalize rounded-full transition delay-50 duration-500 lg:w-3/12 hover:bg-white hover:text-cyan-900 hover:border-white">
        Digital solution
        </span>
      </div>



      </div>
      <div className="w-full h-[35%] mb-5 flex justify-center items-center lg:h-full lg:pt-28 lg:mb-0">
        <HeroRight/>
      </div>
    </section>
  );
}
