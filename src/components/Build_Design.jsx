import React from 'react'
import { NavLink } from 'react-router'

const Build_Design = () => {
  return (
 
<div className='flex flex-col md:flex-row justify-center gap-8 p-19 md:gap-30 bg-secondary  text-primary px-10 md:p-29 items-start '>

    <div  className='flex flex-col gap-4 h-full md:h-[350px] '>
    <p className='text-4xl  md:text-6xl font-[700]'> I design &  <br className='hidden md:block' /> build stuff</p>
    <p className='md:text-[22px]  '>Open source projects, <br /> web apps and experimentals.
  
    </p>

    <NavLink to="/mywork">
    <p className='boder-s-1 border p-2 w-60 text-center text-xl mt-8 '>See my works &rarr;</p>
    </NavLink>
    
  </div>

  <hr className='md:hidden bg-primary w-px'/>
 <div className=' hidden md:block w-px h-100 bg-primary mx-4 '></div>
  
 
  <div className='flex flex-col gap-4   h-full md:h-[350px]'>
 <p className='text-4xl  md:text-6xl font-[700]'>I play the <br className='hidden md:block' /> piano</p>
    <p className='md:text-[22px]  '>
      I love music and play the piano in my free time. <br className='hidden md:flex' /> It helps me relax and inspires my creativity.

     
    </p>
     <p className='boder-s-1 border p-2 w-60 text-center text-xl mt-8 '> Listen to my playist &rarr; </p>
  </div>
   

</div>

  )
}

export default Build_Design