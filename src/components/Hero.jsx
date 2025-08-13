import React from "react";
import Nav from "./Nav";

import img2 from "../assets/img2.png";

function Hero() {
  return (
    <div className=" flex  flex-col md:flex-row relative overflow-x-hidden">

     
   <Nav />

   
      <div className=" bg-secondary  md:w-2/3  text-primary md:h-3/4 px-10   ">
        <div className="   pt-20 md:pt-48 md:px-29 pb-5 flex flex-col justify-center  items-start md:items-start  ">
          <p className="font-[950] text-[50px]  mt-12 leading-12 md:text-6xl md:leading-15 ">
            Fullstack <br />
            Web Developer<span className="text-white">.</span>
          </p>
          <p className="text-white mt-5 text-[18px]   ">
     I build sleek interfaces and powerful backends that bring ideas to life. With a passion for clean code and seamless user experiences, I bridge the gap between design and logic. Whether it’s crafting responsive UIs or architecting robust APIs, I turn complexity into clarity.
          </p>
          <div className="flex  gap-4 text-[10px] md:text-[13px] mt-20 mb-5  ">
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
      <div className="bg-primary px-10  md:p-18 md:w-1/3     ">

<div className="flex flex-col md:mt-35 gap-9 ">

<div className=" ">
<p className="text-secondary font-[700] text-2xl">Design</p>
<p className=" mt-2 text-purple-950 text-sm leading-5.5">I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me. I'm committed to creating fluent user experiences while staying fashionable.</p>
 </div>

  <div className="  ">
<p className="text-secondary font-bold text-2xl">Engineering</p>
<p className=" text-purple-950 text-sm mt-2 leading-5.5 ">In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>
 </div>


</div>

 
      </div>

      
    </div>
  );
}

export default Hero;
