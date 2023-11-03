"use client";
import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";
import { svgPath } from "@/constants";
import menu from "@/public/menu-black.svg";
import { CustomButton, Logo } from "@/components";
import { navLinks } from "@/constants";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [prevPosition, setPrevPosition] = useState(0);
  const handleScrollY = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    setPrevPosition(clientWindowHeight - 10);

    return () => window.removeEventListener("scroll", handleScrollY);
  }, [clientWindowHeight]);

  // const handleScroll = async (id: string) => {
  //   const nextSection = document.getElementById(id);
  //   setIsOpen(false);
  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <header
      className={`w-full h-14 capitalize  px-3 z-40 lg:h-20 before:absolute before:right-0 before:bottom-0 before:left-0 before:top-0 before:transition-all before:ease-in-out before:duration-700  before:-z-10 before:content[''] ${
        clientWindowHeight > 0 && clientWindowHeight < 900
          ? "before:translate-full before:bg-white text-cyan-900 fixed"
          : pathname === "/"
          ? "before:-translate-y-20 text-white absolute"
          : "before:-translate-y-20 text-cyan-900 absolute"
      } `}>
      <nav className="h-full flex 900">
        <span
          onClick={() => router.push("/")}
          className="w-2/5 h-full cursor-pointer flex justify-start items-center 900 lg:w-2/12">
          <Logo />
        </span>
        <div className="hidden text-xl h-full items-center  lg:flex lg:w-8/12">
          {navLinks[0].main.map((link) => (
            <Link className="px-3 font-normal" href={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className="w-3/5 h-full font-thin flex justify-evenly items-center text-3xl lg:w-2/12">
          <span className="cursor-pointer" onClick={() => {}}>
            <Icon className="" path={svgPath.magnifyPath} size={"25px"} />
          </span>
          <span className="cursor-pointer" onClick={() => {}}>
            <Icon path={svgPath.bellPath} size={"25px"} />
          </span>
          <span
            className="cursor-pointer"
            onClick={() => router.push("/signin")}>
            <Icon path={svgPath.accountPath} size={"25px"} />
          </span>
          <span className="cursor-pointer" onClick={() => setIsOpen(true)}>
            <Icon path={svgPath.menuPath} size={"25px"} />
          </span>
        </div>

        <div
          className={`${
            isOpen ? "flex -translate-x-50" : "hiddenn translate-x-full"
          } w-screen h-full flex transition duration-500 delay-200 font-light px-5 py-5 pb-5 flex-col gap-2 text-cyan-900 fixed right-0 bg-white overflow-y-auto overscroll-y-contain lg:flex-col lg:w-3/5`}>
        
          <div className="h-52 flex pb-5 border-b-slate-200 border-b-2 lg:border-0 ">
            {/* main */}
            <div className="flex flex-col justify-end items-start">
              {navLinks[0].main.map((link) => (
                <Link
                  className="font-normal text-lg py-1 cursor-pointer lg:hidden"
                  href={link.url}
                  key={link.title}>
                  {link.title}
                </Link>
              ))}
            </div>
            <span
              className="w-full flex justify-end gap-2 cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}>
              close
              <Icon path={svgPath.menuPath} size={"25px"} />
            </span>
          </div>

         <div className="w-full flex flex-col lg:flex-row ">
           <div className="flex flex-col lg:w-1/2 lg:pl-10">
            {/* transport */}
            <span className="font-bold text-lg pt-5">
              Transportation Services
            </span>
            {navLinks[0].transport.map((link) => (
              <Link
                className="cursor-pointer py-1"
                href={link.url}
                key={link.title}>
                {link.title}
              </Link>
            ))}
            {/* supplyChain */}
            <span className="font-bold text-lg pt-5">
              Supply Chain & Logistics
            </span>
            {navLinks[0].supplyChain.map((link) => (
              <Link
                className="cursor-pointer py-1"
                href={link.url}
                key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col lg:w-1/2 lg:pl-10">
            {/* digitalSolutions */}
            <span className="font-bold pt-5">Digital solutions</span>
            {navLinks[0].digitalSolutions.map((link) => (
              <Link
                className="cursor-pointer py-1"
                href={link.url}
                key={link.title}>
                {link.title}
              </Link>
            ))}

            <ul className="flex flex-col pt-10">
              <li className="flex gap-5 py-2 text-xl font-normal">
                <Icon path={svgPath.menuPath} size={"25px"} /> Contact us
              </li>
              <li className="flex gap-5 py-2 text-xl font-normal">
                <Icon path={svgPath.menuPath} size={"25px"} /> Local offcies &
                info
              </li>{" "}
              <li className="flex gap-5 py-2 text-xl font-normal">
                <Icon path={""} size={"25px"} /> Insight
              </li>{" "}
              <li className="flex gap-5 py-2 text-xl font-normal">
                <Icon path={svgPath.menuPath} size={"25px"} /> Sustainability
              </li>{" "}
              <li className="flex gap-5 py-2 text-xl font-normal">
                <Icon path={svgPath.menuPath} size={"25px"} /> Career
              </li>{" "}
            
            </ul>
          </div>
         </div>

        </div>
      </nav>
    </header>
  );
};
export default NavBar;
