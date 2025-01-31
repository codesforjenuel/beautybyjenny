import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Contact() {
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='w-87'>
        <h1 className='outline-2'>Contact</h1>
        <p>Jennifer Zamora</p>
        <p>CEL-323-535-6871</p>
        <div id='socialIcons' className='flex flex-row justify-around m-10'>
        <FaInstagram className='w-15 h-15 hover:text-yellow-500' />
        <FaTiktok className='w-15 h-15 hover:text-yellow-500'/>
        </div>
    </div>
    </div>
  )
}

export default Contact