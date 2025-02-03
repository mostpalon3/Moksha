import React from 'react'
import { Group } from '../components/Group'
import gmail from '../assets/images/gmail.png'
import insta from '../assets/images/insta.png'
import facebook from '../assets/images/facebook.png'
import X from '../assets/images/X.png'

const Contacts = () => {
  return (
    <Group className={`flex flex-col items-center justify-center absolute left-[18050px] top-[25dvh] h-screen`}>
      <h1 className='text-white font-cinzel text-[4dvh] text-nowrap'>Contact Us</h1>
      <div className='flex flex-row justify-center items-center gap-[1.5dvh] relative top-[2dvh]'>
      <a href="#"><img src={gmail} alt="Gmail" className="w-10 h-10" /></a>
        <a href="#"><img src={insta} alt="Instagram" className="w-10 h-10" /></a>
        <a href="#"><img src={facebook} alt="Facebook" className="w-10 h-10" /></a>
        <a href="#"><img src={X} alt="Twitter (X)" className="w-10 h-10" /></a>
      </div>
    </Group>
  )
}

export default Contacts
