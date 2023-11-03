import Image from "next/image";
export default function About() {
  return (
    <div className="w-full h-auto py-5 flex flex-col justify-between items-center bg-[linear-gradient(#9174005a,#352b0144),url('/70.jpg')] bg-center bg-cover bg-no-repeat bg-origin-border text-white ">
      <span className="w-11/12 py-5 text-center lg:w-1/2">
        delivering best-in-class service to our customers, we are always
        available to help you with your particular needs and offer you a
        one-stop-shop solution for your next shipping request.
      </span>

      <div className="w-11/12 h-auto flex flex-col gap-2 gap-y-4 lg:flex-row lg:w-4/6">
       
        <div className="flex flex-col gap-2 py-5 items-center flex-1 border">
          <span className="w-20 h-20 relative">
            <Image src={'/hand-holding-smartphone.svg'} fill alt="number of employees"/>
          </span>
          <span className="font-bold text-4xl">180K</span>
          <span>MSC Group employees</span>
        </div>
        <div className="flex flex-col gap-2 py-5 items-center flex-1 border">
          <span className="w-20 h-20 relative">
            <Image src={'/menu-black.svg'} fill alt="number of employees"/>
          </span>
          <span className="font-bold text-4xl">500</span>
          <span>vessels</span>
        </div>
        <div className="flex flex-col gap-2 py-5 items-center flex-1 border">
          <span className="w-20 h-20 relative">
            <Image src={'/radio.svg'} fill alt="number of employees"/>
          </span>
          <span className="font-bold text-4xl">10.3</span>
          <span>million TEU (estimated)</span>
        </div>
           <div className="flex flex-col gap-2 py-5 items-center flex-1 border">
          <span className="w-20 h-20 relative">
            <Image src={'/seedling.svg'} fill alt="number of employees"/>
          </span>
          <span className="font-bold text-4xl">75</span>
          <span>offices</span>
        </div>
      </div>
      <div className="w-full h-[20vh] flex text-center items-center justify-center lg:py-5">
        <span className="w-6/12 h-12 flex text-center items-center justify-center text-sm border-2 border-white capitalize rounded-full transition delay-50 duration-500 lg:w-3/12 hover:bg-white hover:border-slate-200">
          Read more about geo-xpo
        </span>
      </div>
    </div>
  );
}
