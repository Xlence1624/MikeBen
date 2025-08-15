import React, { useState } from 'react'
import emailjs from 'emailjs-com';



const Message = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value})
  }
const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_ilpfjwp', 'template_6bctouq', formData, 'cvf9s7KQTf9BGFSp_')
      .then(() => alert('Message sent successfully!')) 
   .catch((error) => console.error('Email error:', error));

  };



  return (
    <div className='flex flex-col justify-center items-center  m-8 md:m-20 '>
<div>
  <p className='text-center text-secondary text-4xl md:text-6xl font-[700]'>Send me a message!</p>
  <p className='text-purple-950 text-xl md:text-2xl text-center mt-5'>Got a question or proposal, or just want <br className='hidden md:block' />
to say hello? Go ahead.</p>

</div >

<form action="" onSubmit={sendEmail}>
<div className='flex flex-col md:flex-row justify-between gap-20 mt-20 text-purple-950  ' >
  <div>
    <p className='text-gray-300 mb-2 text-sm'>Your Name</p>
    <input name="name" onChange={handleChange} type="text" placeholder='Enter your name' className='border-b-1 border-purple-900/50 w-80 py-2  outline-0' />
  </div>

  <div>
    <p className='text-gray-300 mb-2' >Your Email Address</p>
    <input type="text" name="email" onChange={handleChange}placeholder='Enter your Email address' className='border-b-1 border-purple-900/50 w-80 py-2 outline-0' />
  </div>
</div>
 <textarea name="message" onChange={handleChange} id=" "  placeholder='Write your message here.' className='border-b-1 border-purple-900/50 md:w-1/2  w-full  text-purple-950 outline-0  my-10' ></textarea>

 <button type="submit" className='border-s-1 border bg-secondary text-white p-2 cursor-pointer' >Send message</button>
</form>


 

    </div>
  )
}

export default Message