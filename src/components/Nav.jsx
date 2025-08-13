import React, { useState } from 'react'
import img from '../assets/011.JPG'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
   
<div className=''>

<div className='flex justify-between items-center absolute top-0 w-full p-5 md:px-20 md:pt-12 bg-transparent text-primary text-2xl'>
 <p className=' flex justify-center items-center font-[900] gap-1 '> 
  <img src={img}  className="  rounded-full aspect-square object-cover object-top w-10 h-10 " 
  alt="" />
  Michael</p>
{/* nav bar icon */}
  <div className='leading-3  font-[900] flex flex-col  items-end md:text-[#355edb] cursor-pointer '   onClick={()=> setIsOpen(true)}>  <hr  className='w-11 border-1 md:border-3'/> <br /> <hr className='w-8 border-1 md:border-3' /></div>

  

  </div>

<div className={` flex flex-col items-center justify-between text-[#355edb]  fixed t  duration-600 ease-in-out  shadow-lg md:rounded-lg  bg-white h-full w-full  md:w-1/4 md:h-3/5 md:my-5 md:mx-10  ${ isOpen ? 'right-0 ' : ' right-[-850px]'}`}>
<p className=' absolute right-5 text-6xl cursor-pointer' onClick={()=> setIsOpen(false)}
  
  >&#215;</p>
  <ul className='flex  flex-col justify-between items-center px-15 pt-20 gap-10 mt-15 text-xl font-sans lora'>
    <li>Home</li>
    <li>My Work</li>
    <li>My Resume</li>
    <li>Contact me</li>

  </ul>
<div  className=' px-15 pt-10 md:mb-10'>
    <p className='text-gray-300 text-center'>SAY HELLO</p>
  <p>orjimichael73@yahoo.com</p>
  <div className='flex gap-4 mt-5 text-2xl pt-5 pb-5'>
<i class="fa-brands fa-github"></i>
<i class="fa-brands fa-square-linkedin"></i>
<i class="fa-brands fa-whatsapp"></i>
<i class="fa-brands fa-x-twitter"></i>
  
</div>
</div>



</div>






</div>


  )
}

export default Nav