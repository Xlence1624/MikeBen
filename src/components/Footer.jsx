import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between 
    bg-purple-950 text-primary p-8 md:p-20 gap-10'>
<div className='flex justify-around '>

  <div>
      <p>SAY HELLo</p>
<p>orjimichael73@yahoo.com</p>
<p>Whatsapp</p>


  </div>

  <div>
    <p>My work</p>
    <p>My contact</p>
    <p>My Resume</p>
  </div>

</div>



<div>
  <hr />
  <div className='flex justify-between p-5'>

    <p>© 2023 Orji Michael. All rights reserved.</p>

    <p>TW   GH   LN  YT</p>
  </div>
</div>

    </div>
  )
}

export default Footer