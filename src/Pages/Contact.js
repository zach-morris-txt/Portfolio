import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faSquarePhone } from '@fortawesome/free-solid-svg-icons'

import '../Styles/ContactPage.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Contact = () => {
    const form = useRef();
    function sendEmail(e) {
      e.preventDefault();
      var status = document.getElementById('status')

      emailjs.sendForm('service_o41xzyd', 'template_c70amym', form.current, 'rRq4k2FhFObFtegju')
        .then((result) => {
          status.classList.add('success')
          status.innerHTML = "Success"
        }, (error) => {
          status.classList.add('error')
          status.innerHTML = `Error: ${error}`
        });
        form.current.reset()
    }


  return (
    <div>
      <Navbar />
      <div className='contactContainer'>
        <div id='contactItems'>
          <a href="https://www.linkedin.com/in/zachariah-morris/" className="" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size='3x' className="faIcon" />
          </a>
          <a href="https://github.com/zach-morris-txt" className="" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} size='3x' className="faIcon" />
          </a>
          <a href="mailto:zachariahmorris2000@gmail.com" target="_blank" rel="noreferrer">
            <div><FontAwesomeIcon icon={faEnvelopeOpen} size='3x' className="faIcon" />ZachariahMorris2000@gmail.com</div>
          </a>
          <div><FontAwesomeIcon icon={faSquarePhone} size='3x' className="faIcon" />(813) 570 5140</div>
        </div>
        <div className='formContainer'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='formItem'>
              <input type="text" className='subject' name='subject' value='Contact' readOnly/>
            </div>
            <div className='formItem'>
              <input type="text" className='formItemInput' name='name' placeholder='Name'></input>
            </div>
            <div className='formItem'>
              <input type="email" className='formItemInput' name='email' placeholder='Email' required></input>
            </div>
            <div className='formItem'>
              <textarea name='message' className='formItemInput' placeholder='Email Me' cols="30" rows="10" required></textarea>
            </div>
            <input type="submit" value='Send' readOnly/>
          </form>
        </div>
        <div id='status' />
      </div>
      <Footer />
    </div>
  )
}

export default Contact