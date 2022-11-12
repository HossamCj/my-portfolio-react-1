import React from 'react'

import { BiCheck } from 'react-icons/bi'
import './Services.css'


const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container service__container'>
        
        {/* START UI / UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>In culpa labore Lorem.Lorem cillum aute .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>In culpa labore Lorem.Lorem cillum aute voluptate .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>In culpa labore Lorem.Lorem cillum aute voluptate .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>In culpa labore Lorem.Lorem cillum aute voluptate .</p>
            </li>
          </ul>
        </article>
        {/* END UI / UX */}

        {/* START WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>In culpa labore Lorem.Lorem cillum aute voluptate .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>In culpa labore Lorem.Lorem cillum aute voluptate .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>In culpa labore Lorem.Lorem cillum aute .</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>In culpa labore Lorem.Lorem cillum aute voluptate .</p>
            </li>
            
          </ul>
        </article>
        {/* End WEB DEVELOPMENT */}
      </div>
      
    </section>
  )
}

export default Services