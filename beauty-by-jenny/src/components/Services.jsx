import React from 'react'
import {motion} from 'framer-motion'
import { PiHairDryerFill } from "react-icons/pi";
import { BsScissors } from "react-icons/bs";
import { PiOfficeChairFill } from "react-icons/pi";
import { PiSprayBottleFill } from "react-icons/pi";

function Services() {
  return (
    <div
    
    className='flex flex-col bg-yellow-100 w-full items-center backgroundColor outline-2'>
        <h1 className='drop-shadow-md flex flex-row' id='services'>SERVICES</h1>
<div id='iconsContainer' className='flex flex-row justify-around m-3 w-full'>
<PiHairDryerFill className='w-10 h-10 outline-2 rounded-full p-1' />
<BsScissors className='w-10 h-10 outline-2 rounded-full p-1'/>
<PiOfficeChairFill className='w-10 h-10 outline-2 rounded-full p-1'/>
<PiSprayBottleFill className='w-10 h-10 outline-2 rounded-full p-1'/>

</div>
<motion.ul 
initial={{opacity:0, translateX: "100%"}}
whileInView={{opacity:1, translateX:"0%"}}
transition={{duration:1}}
className='text-left m-3'>
    <li>Haircuts $65-$85</li>
    <li>Blowouts & Styling $55-$75</li>
    <li>Bang Trimming $25</li>
    <li>Full Hair Color $145-$185</li>
    <li>Root Touch-up $85</li>
    <li>Partial Highlights & Lowlights $195</li>
    <li>Full highlights & lowlights $265</li>
    <li>Balayage & Ombre-Call for Quote</li>
    <li>Hair gloss/toning $75</li>
    <li>Deep Conditioning $85</li>
    <li>Keratin $250-$350</li>
    <li>Perms $85+</li>
    <li>FREE Hair Consultation </li>
    <li>Makeup $125 with or without lashes </li>
  
</motion.ul>

    </div>
  )
}

export default Services