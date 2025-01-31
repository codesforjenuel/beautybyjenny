import React from 'react'
import {motion} from 'framer-motion'

function About() {
  return (
    <motion.div
    initial={{opacity:0, translateX: "100%"}}
 whileInView={{opacity:1, translateX:"0%"}}
 transition={{duration:2}}
    id='aboutContainer'>
        <h1 className='drop-shadow-md outline-2 p-2'>About Me</h1>
        <div className='w-full flex flex-row flex-wrap justify-center text-center backgroundColor outline-2'>
            <img 
        src="https://res.cloudinary.com/dkaeetuud/image/upload/v1738050010/beauty%20by%20jenny/jenny_profile_i82xum.png" 
        alt="Jennifer's profile picture"
        id='profilePic'
             />
             <p className='m-6 w-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati distinctio porro est enim asperiores sequi, sed impedit harum voluptatum, magnam neque cumque rem. Atque necessitatibus enim debitis placeat quae.</p>
    </div>
        </motion.div>
        
  )
}

export default About