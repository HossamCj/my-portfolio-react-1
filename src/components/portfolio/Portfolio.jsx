import React from 'react'

import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

import './Portfolio.css'



const data = [
  {
    id:1,
    image: IMG1,
    title: 'Product Management System[CRUDS]',
    github: 'https://github.com/HossamCj/CRUP-product-management-system',
    demo: 'https://cruds-management-product-system-js.netlify.app',
  },
  {
    id:2,
    image: IMG2,
    title: 'CROWN-Clothing[CRUDS]',
    github: 'https://github.com/HossamCj/Kalbonyan-Elmarsos-2/tree/main/02-Udemy/3-Reactjs-ZTM/Projects/CRWN-Clothing-Store',
    demo: 'https://allen-clothing.netlify.app',
  },
  {
    id:3,
    image: IMG3,
    title: 'Monster Rolodex',
    github: 'https://github.com/HossamCj/Kalbonyan-Elmarsos-2/tree/main/02-Udemy/3-Reactjs-ZTM/Projects/monsters-rolodex',
    demo: 'https://monster-rolodex-app-kalbonyan.netlify.app',
  },
  {
    id:4,
    image: IMG4,
    title: 'Todo App',
    github: 'https://github.com/HossamCj/Kalbonyan-Elmarsos-2/tree/main/02-Udemy/2-Js-Andrew/Projects/3-todo-app',
    demo: 'https://todo-app-kalbonyan.netlify.app',
  },
  {
    id:5,
    image: IMG5,
    title: 'Notes App',
    github: 'https://github.com/HossamCj/Kalbonyan-Elmarsos-2/tree/main/02-Udemy/2-Js-Andrew/Projects/2-notes-app',
    demo: 'https://notes-app-kalbonyan.netlify.app/index.html',
  },
  {
    id:6,
    image: IMG6,
    title: 'Hangman Guess Word App',
    github: 'https://github.com/HossamCj/Kalbonyan-Elmarsos-2/tree/main/02-Udemy/2-Js-Andrew/Projects/1-hangman',
    demo: 'https://hangman-app-kalbonyan.netlify.app',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <h5>If you checking the demos from Egypt use 1.1.1.1 cloudflare Warp, to open netlify projects</h5>
      <br />

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={ image } alt={title} />
                </div>
                <h3>{ title }</h3>
                <div className='portfolio__item-cta'>
                  <a href={ github } className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={ demo } className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio