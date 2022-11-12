import React from 'react'

import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import Me from '../../assets/pp.jpg'
import './About.css'



const About = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ Me } alt="About Me Img" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className="about__card">
                <FaAward  className="about__icon"/>
                <h5>Experience</h5>
                <small>3+ Years Of Software Studies</small>
              </article>

              <article className="about__card">
                <FiUsers  className="about__icon"/>
                <h5>Clients</h5>
                <small>Maybe 300+ Worldwide in the future xD</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary  className="about__icon"/>
                <h5>Projects</h5>
                <small>30+ Projects</small>
              </article>

            </div>

            <p>
            Hi, my name is Hossam. I've practiced and studied for 3 years as a Front-end Developer learning the basics of software engineering, Including the foundations of software engineering like: Object Oriented Design - Data Structures - Algorithms - Design Patterns - Databases - APIs Web Services – Software Testing/QA - GitHub - Git. 
            I've created responsive web pages using HTML & CSS, building Interactive and dynamic web pages plus content using Pure JavaScript. When designing websites, I like to use [React.js] which gives me significant control over website dynamics, loading speed, navigation between pages and components, and control over any recorded data and local storage.
            :) and my trip hasn't ended yet.
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
            
          </div>
        </div>
    </section>
  )
}

export default About