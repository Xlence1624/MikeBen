import React from 'react'
import Message from './Message.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

const ContactMe = () => {
  return (
    <div className='flex flex-col gap-15'>
      <Nav/>
<Message/>
<Footer/>

    </div>
  )
}

export default ContactMe