import React from 'react'
import {motion} from 'framer-motion'

function WorkPictures() {
  return (
    <motion.div
    initial={{opacity:0, translateZ: "100%"}}
 whileInView={{opacity:1, translateZ:"0%"}}
 transition={{duration:1}}
    id='workPics' className='flex flex-row items-center'>

  <h1 className='ml-10 drop-shadow-md' id='works'>WORKS</h1>
    </motion.div>
  )
}

export default WorkPictures