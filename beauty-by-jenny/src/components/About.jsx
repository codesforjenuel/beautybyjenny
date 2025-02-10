import React from 'react'
import {motion} from 'framer-motion'

function About() {
  return (
    <motion.div
    initial={{opacity:0, translateX: "100%"}}
 whileInView={{opacity:1, translateX:"0%"}}
 transition={{duration:1}}
    id='aboutContainer'>
        <h1 className='drop-shadow-md outline-2 p-2 backgroundColor rounded-md' id="aboutMe">About Me</h1>
        <div className='w-full flex flex-row flex-wrap justify-center text-center backgroundColor outline-2'>
            <img 
        src="https://res.cloudinary.com/dkaeetuud/image/upload/v1738050010/beauty%20by%20jenny/jenny_profile_i82xum.png" 
        alt="Jennifer's profile picture"
        id='profilePic'
             />
             <p className='m-8 w-sm'>Hi, I’m Jennifer Zamora, a professional hairstylist based in Azusa, CA. I’m passionate about creating beautiful, customized looks that make my clients feel confident and radiant. Whether you’re looking for a fresh haircut, a bold color transformation, or a sleek blowout, I’m here to bring your hair goals to life.

With years of experience and a love for all things hair, I specialize in precision cuts, dimensional color, balayage, and expert styling. I take pride in providing a personalized experience, ensuring every client leaves my chair feeling their absolute best.

Let’s create a look you’ll love—book a free consultation today!</p>
    </div>
        </motion.div>
        
  )
}

export default About