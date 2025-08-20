import React, { useState } from "react";
import img from "../assets/011.JPG";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" ">
      <div className="flex justify-between items-center absolute   top-0 w-full p-5  md:px-20 md:pt-5 bg-transparent text-primary text-2xl md:justify-center  ">

       {/* //desktop nav */}
        <div>
          <ul className="hidden md:flex justify-between  gap-8  items-start border-green-500 border-s-1 border rounded-full p-3 px-5 ">
            <li>
           
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
             
              <NavLink to="/mywork">My Works</NavLink>
            </li>
            <li>
            
              <NavLink>My Resume</NavLink>
            </li>
            <li>
              <NavLink>My Contact</NavLink>
            </li>
          </ul>
        </div>
        {/* nav bar icon */}
        <div
          className="leading-3  font-[900] flex flex-col  items-end  text-green-500 cursor-pointer fixed w-full md:hidden right-2"
          onClick={() => setIsOpen(true)}
        >
          {" "}
          <hr className="w-11 border-1 md:border-3" /> <br />{" "}
          <hr className="w-8 border-1 md:border-3" />
        </div>
      </div>

      <div
        className={`  fixed h-screen w-full flex items-center justify-around  flex-col text-[#355edb]   duration-1000 ease-in-out  shadow-lg rounded-lg  bg-white md:hidden ${
          isOpen ? "right-0  " : " -right-350  "
        }`}
      >
        <p
          className=" absolute right-2 top-0 text-3xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          &#215;
        </p>
        <ul className=" text-xl gap-20 flex  flex-col items-center justify-around sm:gap-5 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/mywork">My work</NavLink>
          </li>
          <li>My Resume</li>
          <li>Contact me</li>
        </ul>

        <div className=" flex flex-col  justify-around gap-1 md:gap-4 text-center  md:static  md:mt-8">
          <p className="text-gray-300 ">SAY HELLO</p>
          <p>orjimichael73@yahoo.com</p>
          <div className="flex justify-center items-center  gap-4  text-2xl ">
            <i className="fa-brands fa-github"></i>
            <NavLink to="https://www.linkedin.com/in/orji-michael-onyedikachi-xlence/">
            <i className="fa-brands fa-square-linkedin"></i>
            </NavLink>
            

            <a href="https://wa.me/2348060664979?text= Hi, I just viewed your portfolio and would love to discuss a project with you.">
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <i className="fa-brands fa-x-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
