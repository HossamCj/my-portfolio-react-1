import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/hossam-hassan-738420145/" target="_blank" rel="noreferrer">
            <BsLinkedin />
        </a>
        <a href="https://github.com/hossamcj" target="_blank" rel="noreferrer">
            <FaGithub />
        </a>
    </div>
  )
}

export default HeaderSocials