import React from 'react'
import Nav from './Nav'
import DottedSquare from './DottedSquare'
import img from '../assets/011.JPG'



function Hero() {
  return (
    <div className=' flex  flex-col md:flex-row '>
 <Nav/>
<div className=' bg-secondary md:w-2/3  text-primary md:h-3/4'>


<div className='   pt-48 px-29 pb-5   '>
<p className='font-[900] text-[45px] mt-5 leading-12 md:text-6xl md:leading-15'>Fullstack <br />Developer<span className='text-white'>.</span></p>
<p className='text-white mt-3 text-[18px]'>I craft scalable and user friendly web apps with  great user experiences. </p>
<div className='flex  gap-8 text-[10px] md:text-[13px] mt-20   pb-3 '>
  <p>
    Highly skilled at building responsive <br />and interactive web applications using <br /> modern technologies.
  </p>
  <p>Proven experience building  <br />successful products for clients <br />across several countries.</p>
</div>
</div>

</div>
<div className='bg-primary p-27 md:w-1/3 '>
<div className='p-5'>
<DottedSquare/>
</div>
<div className='p-5 absolute left-3/5 top-15/16 md:top-3/5 md:left-2/3'>
<DottedSquare/>
</div>



<div className=' absolute left-1/4 top-5/5 md:left-12/21 md:top-1/5'>
<img src={img} alt="" className=' w-[230px] h-[220px] md:h-[320px] md:w-[280px] object-cover object-top md:rounded-2xl'  />
</div>

</div>


    </div>
  )
}

export default Hero