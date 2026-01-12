import React from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router'

const Resume = () => {
  return (

   
    <div className='flex bg-blue-50 text-secondary md:m-20 flex-col md:flex-row justify-between p-10 md:p-20 gap-15 min-h-screen '>
    
      {/* //left side */}
      <div className='mt-3' >
        <div className='flex flex-col gap-2  '>
       <p className='primary underline decoration-green-500 decoration-4'>
          <NavLink to="https://mike-ben.vercel.app/">OrjiMichael.dev</NavLink>
        </p>
<p className='text-gray-600'>Lagos, Nigeria</p>
<a href="mailto:orjimichael73@yahoo.com">orjimichael73@yahoo.com</a> 
        </div>
 


<div className='text-gray-400   mt-8'>
  <p className='text-secondary text-xl font-bold mb-5'>Core Technologies:</p>
  <div className='text-xl flex flex-col gap-5'>
 <p>▪ JavaScript</p>
  <p>▪ React</p>
  <p>▪ VueJS</p>
  <p>▪ CSS</p>
  <p>▪ TypeScript</p>
  <p>▪ NodeJS</p>
  </div>
 
</div>
      </div>



{/* 
//right side */}

<div className=' text-gray-500 '>


  <div className='flex flex-col gap-4'>
<p className='text-secondary text-7xl font-bold'>Orji <br /> Michael</p>
<p className='text-gray-800 text-3xl'>Full stack developer</p>
<p className='mt-5 mr-40 text-xl'>Focused on building high-performance, accessible software and scalable systems that drive real business impact.</p>
  </div>

<hr className='mt-5'/>
</div>




    </div>
  )
}

export default Resume