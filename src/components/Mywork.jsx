import React from 'react'
import Nav from './Nav'
import myWork from '../assets/mywork.js'
import { NavLink } from 'react-router'
import Footer from "../components/Footer.jsx"


const Mywork = () => {
  return (
    <div className=' bg-secondary    items-start '>
    
      <Nav/>

     
      
      <div className='flex flex-col text-white items-center p-8 md:p-30 w-full h-full'>
        <p className='text-3xl  font-bold'>./Work</p>
<p className=' text-white text-xl p-5'>
  Some of my selected works.
</p>

<div className='  mt-10 flex flex-col  md:grid grid-cols-4 gap-3'>
 {
        myWork.map(
          (t) => (
       
        <div key={t.id}>

           <NavLink to={t.link} className="w-full">
  <img src={t.img} alt="" className=' w-full h-50 object-cover object-top rounded-t-2xl'/>
  </NavLink>
        
        
  <NavLink to={t.link}>
          <div className='bg-primary text-secondary p-4 rounded-b-2xl shadow-2xl'>


<p className='text-xl font-[500] text-center'>{t.title}</p>

  

          </div>
    </NavLink>
</div>
         
          
  )

        
        )
      } 
</div>
      </div>


     

<Footer/>

    </div>
  )
}

export default Mywork