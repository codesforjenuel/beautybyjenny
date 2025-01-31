import React from 'react'
import {motion} from 'framer-motion'

export const Header = () => {
  return (
 <div className='w-full flex justify-center backgroundColor'>
 <motion.img
 initial={{opacity:0, scale:0}}
 whileInView={{opacity:1, scale:1}}
 transition={{duration:2}}
 src="https://res.cloudinary.com/dkaeetuud/image/upload/v1738009571/beauty%20by%20jenny/Beauty_by_Jenni_Logo_wqgh2b.png"
  alt="beauty by jenny logo" 
  id='jennyLogo'
  className='w-md drop-shadow-md'
  />
 </div>
  )
}
