"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";

export default function Signin() {
  const [overlay, setOverlay] = useState(false);
  const [loginData, setLoginData] = useState({
    email1: "",
    password1: "",
  });
  const [regData, setRegData] = useState({
    username: "",
    fname: "",
    lname: "",
    email: "",
    country: "",
    code: "",
    phone: "",
    landline:"",
    password: "",
    confirmPassword:""
  });

  // functions definitions
  const loginChange = (e: any) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const regChange = (e: any) => {
    setRegData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginUser = async (e: any, data: any) => {
    e.preventDefault();
    console.log('login')
  };

  const registerUser = async (e: any, data: any) => {
    e.preventDefault();
    console.log(data);
    const newUser = await fetch(`api/signup`,
    {
      method: "POST",
      body: JSON.stringify({ data: data })
    })
    // setRegData({
    //   username: "",
    //   fname: "",
    //   lname: "",
    //   email: "",
    //   country: "",
    //   code: "",
    //   phone: "",
    //   landline:"",
    //   password: "",
    //   confirmPassword:""
    // });
  };

  // scroll
  const handleScroll = async (id: string) => {
    const nextSection = document.getElementById(id);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`w-screen h-[240vh] relative flex flex-col lg:flex-row lg:h-screen`}>
      {/* login */}
      <div
        className={`w-full h-[41.7%] bg-white flex justify-center items-center lg:h-screen lg:w-1/2 ${
          overlay ? "" : null
        }`}
        id="signin">
        <form
          onSubmit={(e) => {
            loginUser(e, loginData);
          }}
          className={`w-screen h-full relative flex flex-col justify-center items-center gap-2 lg:shadow-md`}>
          <h5 className="text-2xl mb-5 text-blue-900">Sign into your Account</h5>
          <input
            className="w-10/12 h-14 border border-blue-900 rounded-lg p-1 px-3"
            type="text"
            name="email1"
            onChange={loginChange}
            placeholder="email"
            required
          />
          <input
            className="w-10/12 h-14 border border-blue-900 rounded-lg p-1 px-3"
            type="password"
            name="password1"
            onChange={loginChange}
            placeholder="password"
            required
          />
          <Link href={"/auth/signup"} className={`w-10/12 pt-1`}>
            forgort password
          </Link>

          <button className={`w-10/12 h-14 rounded-lg text-white bg-blue-900`}>
            signin
          </button>
          <span className="w-10/12 flex justify-start items-center my-2">
            <input type="checkbox" className="w-5 h-5 mr-3" />{" "}
            <p>Remember on this device</p>
          </span>
          <p className={`w-10/12`}>
            not registered yet?
            <span
              className={`text-blue-900 px-1`}
              onClick={() => {
                setOverlay(true);
                handleScroll("signup");
              }}>
              Create an Account
            </span>
          </p>
        </form>
      </div>

      {/* registration */}
      <div
        className={`w-full h-[58.3%] relative flex justify-center items-center lg:w-1/2 lg:h-screen lg:items-end ${
          overlay ? null : ""
        }`}
        id="signup">
        <form
          onSubmit={(e) => registerUser(e, regData)}
          className={`w-screen h-full relative flex flex-col justify-center items-center gap-2 lg:overflow-y-scroll lg:justify-start lg:rounded-lg lg:w-full lg:h-[85vh] lg:py-2 `}>
          <h5 className="text-2xl mb-5 text-blue-900 lg:mb-2">Create Your Account</h5>

          <div className="w-10/12 gap-2 flex flex-col lg:flex-row">
            <input
              className="w-full h-14 border border-blue-900 rounded-lg p-1 px-3 lg:w-full "
              type="text"
              name="username"
              value={regData.username}
              onChange={regChange}
              placeholder="create username"
              required
            />

            <input
              className="w-full h-14 border border-blue-900 rounded-lg p-1 px-3 "
              type="email"
              name="email"
              value={regData.email}
              onChange={regChange}
              placeholder="Enter your business email address"
              required
            />
          </div>
          <div className="w-10/12 gap-2 flex flex-col lg:flex-row">
            <input
              className="w-full h-14 border border-blue-900 rounded-lg p-1 px-3 "
              type="text"
              name="fname"
              value={regData.fname}
              onChange={regChange}
              placeholder="Enter your first name"
              required
            />

            <input
              className="w-full h-14 border border-blue-900 rounded-lg p-1 px-3 "
              type="text"
              name="lname"
              value={regData.lname}
              onChange={regChange}
              placeholder="Enter your surname"
              required
            />
          </div>
          <div className="w-10/12 gap-2 flex flex-col lg:flex-row">
            <input
              className="w-full h-14 border border-blue-900 rounded-lg p-1 px-3"
              type="text"
              name="country"
              value={regData.country}
              onChange={regChange}
              placeholder="Enter your country/region"
              required
            />
            <input
              className="w-full h-14 border border-blue-900 rounded-lg p-1 px-3"
              type="text"
              name="code"
              value={regData.code}
              onChange={regChange}
              placeholder="code"
              required
            />
          </div>
          <div className="w-10/12 gap-2 flex flex-col lg:flex-row">
            <input
              className="w-full h-14 border border-blue-900 rounded-lg p-1 px-3"
              type="text"
              name="phone"
              value={regData.phone}
              onChange={regChange}
              placeholder="Enter mobile number"
              required
            />
            <input
              className="w-full h-14 border border-blue-900 rounded-lg p-1 px-3"
              type="text"
              name="landline"
              value={regData.landline}
              onChange={regChange}
              placeholder="Enter landline number"
              required
            />
          </div>
          <div className="w-10/12 gap-2 flex flex-col lg:flex-row">
          <input
              className="w-full h-14 border border-blue-900 rounded-lg p-1 px-3"
              type="password"
              name="password"
              value={regData.password}
              onChange={regChange}
              placeholder="New password"
              required
            />
               <input
              className="w-full h-14 border border-blue-900 rounded-lg p-1 px-3"
              type="password"
              name="confirmPassword"
              value={regData.confirmPassword}
              onChange={regChange}
              placeholder="Confirm password"
              required
            />
          
          </div>
        

          <button className={`w-10/12 h-14 rounded-lg text-white bg-blue-900`}>
            Signup
          </button>

          <p className={`absolute bottom-5 flex`}>
            already have an account?
            <span
              className={`text-blue-900 px-1`}
              onClick={() => {
                setOverlay(false);
                handleScroll("signin");
              }}>
              Signin
            </span>
          </p>
        </form>
      </div>

      {/* overlay */}
      <div
        className={`w-full absolute transition delay-150 duration-500 lg:w-1/2 lg:h-full ${
          overlay
            ? "h-[41.7%] translate-y-0 lg:-translate-x-0 lg:translate-y-0"
            : "h-[58.3%] translate-y-[71.5%] lg:translate-x-full lg:translate-y-0 "
        } `}
        style={{ backgroundImage: "url(/Truck.jpg)" , backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat: "no-repeat"}}
      />
    </div>
  );
}
