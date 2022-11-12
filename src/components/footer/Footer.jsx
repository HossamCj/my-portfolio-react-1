import React from 'react'
import { BsLinkedin } from 'react-icons/bs'

import './Footer.css'


const Footer = () => {
  return (
    <footer id="footer">
      <a href='#' className='footer__logo'>HossamCj</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
          <a 
            href='https://eg.linkedin.com/in/hossam-hassan-mohamed-738420145?trk=profile-badge' 
            target='_blank' 
            rel="noreferrer"
          ><BsLinkedin /></a>
      </div>

      <div className='footer__copyright'>
        <small>
          &copy; THANKS TO EGATOR Tutorials.
        </small>
      </div>
      
    </footer>
  )
}

export default Footer