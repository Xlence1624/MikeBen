import React from 'react'
import active from "../assets/active.png";


const Brief = () => {
  return (
    <div className='flex flex-col  md:flex-row justify-center items-center p-5  text-purple-950 md:px-29'>
      <div className='flex flex-col gap-5 md:w-2/5 md:text-[18px]'>
<p className='text-secondary text-4xl md:text-6xl font-[700]'>Over the years,</p>
<p>I've honed my skills in web development, mastering both front-end and back-end technologies. My journey has been fueled by a passion for creating seamless user experiences and robust applications. I thrive on challenges, constantly seeking to learn and adapt in this ever-evolving field.</p>
<p>My expertise spans a wide range of technologies, including React, Node.js, and various databases. I take pride in writing clean, maintainable code and implementing best practices to ensure scalability and performance. Collaboration is key in my approach, as I believe that great software is built through teamwork and open communication.</p>
<p>Whether it's building responsive user interfaces or architecting complex back-end systems, I am dedicated to delivering high-quality solutions that meet the needs of users and businesses alike. My goal is to continue pushing the boundaries of what's possible in web development, always striving for excellence in every project I undertake.</p>
<p>Let's connect and explore how I can contribute to your next project!</p>

      </div>


<img src={active} alt=""className="w-2/3 object-contain object-top h-120" />

    </div>
  )
}

export default Brief