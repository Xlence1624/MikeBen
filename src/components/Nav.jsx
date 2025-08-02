import React from 'react'
import img from '../assets/011.JPG'

const Nav = () => {
  return (
    

        <div className='flex justify-between items-center absolute top-0 w-full p-5 md:px-20 md:pt-12 bg-transparent text-primary text-2xl'>
 <p className=' flex justify-center items-center font-[900] '> 
  <img src={img}  className="  rounded-full aspect-square object-cover object-top w-10 h-10 " 
  alt="" />
  Michael</p>

  <div className='leading-3  font-[900] flex flex-col  items-end md:text-[#355edb] '>  <hr  className='w-11 border-1 md:border-3'/> <br /> <hr className='w-8 border-1 md:border-3' /></div>

  

  </div>

  )
}

export default Nav