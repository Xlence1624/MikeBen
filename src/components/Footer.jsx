import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between 
    bg-purple-950 text-primary p-8 md:pt-40 gap-10'>
<div className='flex justify-around '>



  
    <p>My work</p>
    <p>My contact</p>
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
  <p>orjimichael73@yahoo.com</p>
  <div className='flex justify-center items-center  gap-4  text-2xl '>
<i class="fa-brands fa-github"></i>
<i class="fa-brands fa-square-linkedin"></i>
<i class="fa-brands fa-whatsapp"></i>
<i class="fa-brands fa-x-twitter"></i>
  
</div>
</div>
  <p className='text-center text-gray-300 mt-10'>© 2025 Orji Michael. All rights reserved.</p>
</div>

    </div>
  )
}

export default Footer