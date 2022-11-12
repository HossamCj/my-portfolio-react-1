import React, { useRef } from 'react';
import emailsjs from 'emailjs-com'

import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs'

import './Contact.css'



const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailsjs.sendForm('service_icz74bc', 'template_3hxp9pr', form.current, '9X9-awglrwsgIM8XK')

    e.target.reset()
  }
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div class='container contact__container'>

        {/* START OF CONTACT OPTIONS */}
        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hossamcj@gmail.com</h5>
            <a href='mailto:hossamcj@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+201060597850</h5>
            <a href='https://api.whatsapp.com/send?phone=201060597850' target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinedIn</h4>
            <h5>Hossam Hassan Mohamed</h5>
            <a href='https://eg.linkedin.com/in/hossam-hassan-mohamed-738420145?trk=profile-badge' target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      
    </section>
  )
}


export default Contact