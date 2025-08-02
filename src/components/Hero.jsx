import React from "react";
import Nav from "./Nav";
import DottedSquare from "./DottedSquare";
import img from "../assets/011.JPG";

function Hero() {
  return (
    <div className=" flex  flex-col md:flex-row ">
      <Nav />
      <div className=" bg-secondary  md:w-2/3  text-primary md:h-3/4 ">
        <div className="   pt-30 md:pt-48 md:px-29 pb-5 flex flex-col justify-center items-center  ">
          <p className="font-[900] text-[45px] text-center mt-5 leading-12 md:text-6xl md:leading-15">
            Fullstack
            Developer<span className="text-white">.</span>
          </p>
          <p className="text-white mt-3 text-[18px] text-center px-20">
            I craft scalable and user friendly web apps with great user
            experiences.
          </p>
          <div className="flex  gap-4 text-[10px] md:text-[13px] mt-80 px-10  ">
            <p>
              Highly skilled at building responsive  and interactive web
              applications using modern technologies.
            </p>
            <p>
              Proven experience building successful products for clients across
              several countries.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary p-27 md:w-1/3 flex justify-center items-center ">
        {/* <div className="  md:absolute  md:left-12/21 md:top-1/5"> */}
          <img
            src={img}
            alt=""
            className=" w-[230px] h-[230px]  md:h-[320px] md:w-[280px] object-cover object-top md:rounded-2xl"
          />
        {/* </div> */}
      </div>
    </div>
  );
}

export default Hero;
