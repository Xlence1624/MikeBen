import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between 
    bg-purple-950 text-primary p-8 md:pt-40 gap-10'>
<div className='flex justify-around  md:text-xl'>



  
    <p >
      <NavLink to="/mywork">
        My Work
      </NavLink>
    </p>
    <p>Contact Me</p>
    <p>My Resume</p>


</div>



<div>
  <hr />
  {/* <div className='flex justify-between p-5'>

    <p>© 2023 Orji Michael. All rights reserved.</p>

    <p>TW   GH   LN  YT</p>
  </div> */}
  <div  className=' flex flex-col  justify-around gap-1 md:gap-4 text-center  md:static mt-5 md:mt-8'>
    <p className='text-gray-300 '>SAY HELLO</p>
      <a href="mailto:orjimichael73@yahoo.com">orjimichael73@yahoo.com</a> 
  <div className='flex justify-center items-center  gap-4  text-2xl '>
  <NavLink to="https://github.com/Xlence1624">
                 <i className="fa-brands fa-github"></i>
            </NavLink>
<NavLink to="https://www.linkedin.com/in/orji-michael-onyedikachi-xlence/">
<i className="fa-brands fa-square-linkedin"></i>
</NavLink>


<a href="https://wa.me/2348060664979?text= Hi, I just viewed your portfolio and would love to discuss a project with you."><i className="fa-brands fa-whatsapp"></i></a>

<NavLink to="https://x.com/fhinDaphane">
<i className="fa-brands fa-x-twitter"></i>
</NavLink>

  
</div>
</div>


  <p className='text-center text-gray-300 mt-10'>
    © 2025 Orji Michael. All rights reserved.</p>


</div>

    </div>
  )
}

export default Footer