import React from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router'

const Resume = () => {
  return (

   
    <div className='flex bg-blue-50 text-secondary m-20 flex-col md:flex-row justify-between p-10 md:p-20 gap-15 min-h-screen '>
    
      {/* //left side */}
      <div >
        <div className='flex flex-col gap-2  '>
       <p className='primary'>
          <NavLink to="https://mike-ben.vercel.app/">OrjiMichael.dev</NavLink>
        </p>
<p>Lagos, Nigeria</p>
<a href="mailto:orjimichael73@yahoo.com">orjimichael73@yahoo.com</a> 
        </div>
 


<div className='text-gray-400 flex flex-col gap-5 mt-8'>
  <p className='text-secondary text-xl'>Core Technologies:</p>
  <p>▪ JavaScript</p>
  <p>▪ React</p>
  <p>▪ VueJS</p>
  <p>▪ CSS</p>
  <p>▪ TypeScript</p>
  <p>▪ NodeJS</p>
</div>
      </div>



{/* 
//right side */}

<div className=' text-gray-500'>


  <div className='flex flex-col gap-2'>
<p className='text-secondary text-4xl font-bold'>Orji <br /> Michael</p>
<p>Full stack developer</p>
<p>Focused on building high-performance, accessible software and scalable systems that drive real business impact.</p>
  </div>

<hr className='mt-5'/>
</div>




    </div>
  )
}

export default Resume