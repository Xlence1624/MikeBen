import React from 'react'

const Message = () => {
  return (
    <div className='flex flex-col justify-center items-center m-20 '>
<div>
  <p className='text-center text-secondary text-4xl md:text-6xl font-[700]'>Send me a message!</p>
  <p className='text-purple-950 text-xl md:text-2xl text-center mt-5'>Got a question or proposal, or just want <br className='hidden md:block' />
to say hello? Go ahead.</p>

</div >
<div className='flex flex-col md:flex-row justify-between gap-20 mt-20 text-purple-950  ' >
  <div>
    <p className='text-gray-300 mb-2 text-sm'>Your Name</p>
    <input type="text" placeholder='Enter your name' className='border-b-1 border-purple-900/50 w-80 py-2  outline-0' />
  </div>

  <div>
    <p className='text-gray-300 mb-2'>Your Email Address</p>
    <input type="text" placeholder='Enter your Email address' className='border-b-1 border-purple-900/50 w-80 py-2 outline-0' />
  </div>
</div>
 
 <textarea name="" id=" "  placeholder='Write your message here.' className='border-b-1 border-purple-900/50 md:w-1/2  w-full  text-purple-950 outline-0  my-10' ></textarea>

 <p className='border-s-1 border bg-secondary text-white p-2 cursor-pointer'>Send message</p>
    </div>
  )
}

export default Message