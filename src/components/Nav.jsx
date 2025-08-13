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
  <div className='leading-3  font-[900] flex flex-col  items-end md:text-[#355edb] cursor-pointer'   onClick={()=> setIsOpen(true)}>  <hr  className='w-11 border-1 md:border-3'/> <br /> <hr className='w-8 border-1 md:border-3' /></div>

  

  </div>

<div className={`  fixed h-screen w-full flex items-center  flex-col text-[#355edb]  md:absolute top-0  duration-1000 ease-in-out  shadow-lg rounded-lg  md:w-1/4 md:h-max bg-white  md:my-5 md:mx-10 md:p-10 ${ isOpen ? 'right-0' : ' -right-350'}`}>
<p className=' absolute right-2 top-0 text-3xl cursor-pointer' onClick={()=> setIsOpen(false)}
  
  >&#215;</p>
  <ul className='fixed top-1/4 flex flex-col items-center justify-between gap-10 md:gap-6  text-xl lora'>
    <li>Home</li>
    <li>My Work</li>
    <li>My Resume</li>
    <li>Contact me</li>

  </ul>
<div  className='  flex flex-col justify-between gap-5 bottom-10 md:gap-4 text-center absolute md:static  md:mt-8'>
    <p className='text-gray-300 '>SAY HELLO</p>
  <p>orjimichael73@yahoo.com</p>
  <div className='flex justify-center items-center  gap-4  text-2xl '>
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