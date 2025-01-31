import React from 'react'
import {motion} from 'framer-motion'

function WorkPictures() {
  return (
    <motion.div
    initial={{opacity:0, translateY: "100%"}}
 whileInView={{opacity:1, translateY:"0%"}}
 transition={{duration:1}}
    id='workPics' className='flex flex-row items-center'>

  <h1 className='ml-10 drop-shadow-md'>WORKS</h1>
    </motion.div>
  )
}

export default WorkPictures