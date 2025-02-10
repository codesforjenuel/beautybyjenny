import React from 'react'

function Nav() {
  return (
    <div className='w-full  p-7 backgroundColor outline-2'>
        <ul className='w-full flex flex-wrap justify-around items-center text-center'>
        <a href="#aboutMe"><li className='ml-4 border-2 rounded-2xl p-4 navText'>About Me</li></a>
        <a href="#works"><li className='border-2 rounded-2xl p-4 navText'>Works</li></a>
        <a href="#services"><li className='border-2 rounded-2xl p-4 navText'>Services</li></a>
        <a href="#location"><li className='border-2 rounded-2xl p-4 navText'>Location</li></a>
        <a href="#contact"><li className='mr-4 border-2 rounded-2xl p-4 navText'>Contact</li></a>
        </ul>
    </div>
  )
}

export default Nav