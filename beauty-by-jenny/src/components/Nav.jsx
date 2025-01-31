import React from 'react'

function Nav() {
  return (
    <div className='w-full p-7 backgroundColor outline-2'>
        <ul className='w-full flex justify-between'>
            <li className='ml-4 hover:border-2 rounded-2xl p-4'>About Me</li>
            <li className='hover:border-2 rounded-2xl p-4'>Works</li>
            <li className='hover:border-2 rounded-2xl p-4'>Services</li>
            <li className='hover:border-2 rounded-2xl p-4'>Location</li>
            <li className='mr-4 hover:border-2 rounded-2xl p-4'>Contact</li>
        </ul>
    </div>
  )
}

export default Nav