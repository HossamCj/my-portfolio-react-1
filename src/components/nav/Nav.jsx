import React, { useState } from 'react'

import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine, RiCodeSSlashLine} from 'react-icons/ri'


import './Nav.css'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('')
  
  return (
    <nav>
      <a href="#" 
        onClick={() => setActiveNav('#')}
        className={ activeNav === '#' ? 'active' : ''}
        title="Home"
      ><AiOutlineHome /></a>
      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={ activeNav === '#about' ? 'active' : ''} 
        title="About"
      ><AiOutlineUser /></a>
      <a 
        href="#experience" 
        onClick={ () => setActiveNav('#experience') }
        className={ activeNav === '#experience' ? 'active' : ''}
        title="Experience | Courses"
      ><BiBook /></a>
      <a 
        href="#services" 
        onClick={ () => setActiveNav('#services') }
        className={ activeNav === '#services' ? 'active' : '' }
        title="Services"
      ><RiServiceLine /></a>
      <a 
        href="#portfolio"
        onClick={ () => setActiveNav('#portfolio') }
        className={ activeNav === '#portfolio' ? 'active' : '' }
        title="Portfolio"
      ><RiCodeSSlashLine /></a>
      <a 
        href="#contact" 
        onClick={ () => setActiveNav('#contact') }
        className={ activeNav === '#contact' ? 'active' : '' }
        title="Contact"
      ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav