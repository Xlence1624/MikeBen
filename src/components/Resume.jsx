import React from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router'

const Resume = () => {
  return (

   
    <div className='flex bg-blue-50 text-secondary md:m-20 flex-col md:flex-row justify-between p-10 md:p-20 gap-15 min-h-screen '>
    
      {/* //left side */}
      <div className='mt-3' >
        <div className='flex flex-col gap-2  '>
       <p className='primary underline decoration-blue-800 decoration-1'>
          <NavLink to="https://mike-ben.vercel.app/">OrjiMichael.dev</NavLink>
        </p>
<p className='text-gray-600'>Lagos, Nigeria</p>
<a href="mailto:orjimichael73@yahoo.com" className=''>Send me an Email</a> 
        </div>
 


<div className='text-gray-400   mt-8'>
  <p className='text-secondary text-xl font-bold mb-5'>Core Technologies:</p>
  <div className='text-x flex flex-col gap-3'>
     <p>▪ CSS</p>
 <p>▪ JavaScript</p>
  <p>▪ React</p>
  <p>▪ VueJS</p>
  <p>▪ TypeScript</p>
  <p>▪ NodeJS</p>
   <p>▪ NextJS</p>
    <p>▪ MongoDB</p>
    <p>▪ TailwindCSS</p>
    <p>▪ Git</p>
    <p>▪ GitHub</p>
    <p>▪ Firebase</p>

  
    <p></p>
  </div>
 
</div>
      </div>



{/* 
//right side */}

<div className=' text-gray-500 '>


  <div className='flex flex-col gap-4'>
<p className='text-secondary text-7xl font-bold'>Orji <br /> Michael</p>
<p className='text-gray-800 text-3xl'>Full stack developer</p>
<p className='mt-5 mr-20 md:mr-20 lg:mr-60 text-xl'>Focused on building high-performance, accessible software and scalable systems that drive real business impact.</p>
  </div>

<hr className='mt-5'/>

<div className="experince">
  <p className='text-secondary text-2xl font-bold mb-5 mt-5 underline'>Projects and Experience</p>
  <div className='flex flex-col gap-5 text-xl'>
    <div className='flex justify-between'>
      <p className='font-bold'>Fhin Stores</p>
 <NavLink to="https://commerce-store-jlug.vercel.app/" className={"text-secondary text-sm font-bold"}>Checkout the site</NavLink>
 </div>
      
<p className=''>An E-commerce Platform </p>

      </div>
      
      <ul className='list-disc ml-5 flex flex-col gap-2 mt-2 text-x'>
        <li>Developed and maintained web applications using React and VueJS.</li>
        <li>Collaborated with designers to create responsive and user-friendly interfaces.</li>
        <li>Optimized application performance, resulting in a 20% reduction in load times.</li>
      </ul>






        <div className='flex flex-col gap-5 text-xl mt-10'>
    <div className='flex justify-between'>
      <p className='font-bold'>GetFit App</p>
 <NavLink to="https://workout-app-mocha.vercel.app/" className={"text-secondary text-sm font-bold"}>Checkout the site</NavLink>
 </div>
      
<p className=''>A fitness app </p>

      </div>
         <ul className='list-disc ml-5 flex flex-col gap-2 mt-2 text-x'>
        <li>Developed and maintained web applications using React and VueJS.</li>
        <li>Collaborated with designers to create responsive and user-friendly interfaces.</li>
        <li>Optimized application performance, resulting in a 20% reduction in load times.</li>
      </ul>





         <div className='flex flex-col gap-5 text-xl mt-10'>
    <div className='flex justify-between'>
      <p className='font-bold'>Blessed Union</p>
 <NavLink to="https://commerce-store-jlug.vercel.app/" className={"text-secondary text-sm font-bold"}>Checkout the site</NavLink>
 </div>
      
<p className=''>A wedding website </p>

      </div>
         <ul className='list-disc ml-5 flex flex-col gap-2 mt-2 text-x'>
        <li>Developed and maintained web applications using React and VueJS.</li>
        <li>Collaborated with designers to create responsive and user-friendly interfaces.</li>
        <li>Optimized application performance, resulting in a 20% reduction in load times.</li>
      </ul>




         <div className='flex flex-col gap-5 text-xl mt-10'>
    <div className='flex justify-between'>
      <p className='font-bold'>Fhin Stores</p>
 <NavLink to="https://commerce-store-jlug.vercel.app/" className={"text-secondary text-sm font-bold"}>Checkout the site</NavLink>
 </div>
      
<p className=''>An E-commerce Platform </p>

      </div>
         <ul className='list-disc ml-5 flex flex-col gap-2 mt-2 text-x'>
        <li>Developed and maintained web applications using React and VueJS.</li>
        <li>Collaborated with designers to create responsive and user-friendly interfaces.</li>
        <li>Optimized application performance, resulting in a 20% reduction in load times.</li>
      </ul>
    </div>
</div>
</div>




    
    
  )
}

export default Resume