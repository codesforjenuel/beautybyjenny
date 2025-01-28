import React from 'react'

function Nav() {
  return (
    <div className='w-full mb-6 backgroundColor'>
        <ul className='w-full flex justify-between'>
            <li className='ml-4 navText'>About Me</li>
            <li className='navText'>Works</li>
            <li className='navText'>Services</li>
            <li className='navText'>Location</li>
            <li className='mr-4 navText'>Contact</li>
        </ul>
    </div>
  )
}

export default Nav