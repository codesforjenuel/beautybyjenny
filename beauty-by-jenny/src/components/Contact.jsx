import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='w-87'>
        <h1 className='outline-2 rounded-md' id='contact'>Contact</h1>
        <p className='mt-6'>Jennifer Zamora</p>
        <p>CEL-323-535-6871</p>
        <div id='socialIcons' className='flex flex-row justify-around m-10'>
          <Link to="https://www.instagram.com/beautyby.jenyy/" target='https://www.instagram.com/beautyby.jenyy/'><FaInstagram className='w-15 h-15 hover:text-yellow-500' /></Link>
        <Link to="https://www.tiktok.com/@jenzam16?is_from_webapp=1&sender_device=pc" target='https://www.tiktok.com/@jenzam16?is_from_webapp=1&sender_device=pc'><FaTiktok className='w-15 h-15 hover:text-yellow-500'/></Link>
        
        </div>
    </div>
    </div>
  )
}

export default Contact