import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faSquarePhone } from '@fortawesome/free-solid-svg-icons'

import '../Styles/PageContact.css'
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
        <div className='contactItems'>
          <div className='mixIcon'>
            <a href="https://www.linkedin.com/in/zachariah-morris/" className='iconText' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size='3x' className="faIcon" /><div className='textSize'>LinkedIn</div>
            </a>
          </div>
          <div className='mixIcon'>
            <a href="https://github.com/zach-morris-txt" className='iconText' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} size='3x' className="faIcon" /><div className='textSize'>GitHub</div>
            </a>
          </div>
        </div>
        <div className='formContainer'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='formItem'>
              <input type="text" className='subject' name='subject' value='Contact' readOnly/>
            </div>
            <div className='formItem'>
              <input type="text" className='contactInput inputText' name='name' placeholder='Name'></input>
            </div>
            <div className='formItem'>
              <input type="email" className='contactInput inputText' name='email' placeholder='Email' required></input>
            </div>
            <div className='formItem'>
              <textarea name='message' className='contactMessage inputText' placeholder='Email Me' cols="30" rows="10" required></textarea>
            </div>
            <input type="submit" id='contactSend' className='inputText' value='Send' readOnly/>
          </form>
        </div>
        <div id='status' />
        <div className='contactItems'>
          <div className='mixIcon'>
            <a href="mailto:zachariahmorris2000@gmail.com" target="_blank" rel="noreferrer">
              <div className='iconText'><FontAwesomeIcon icon={faEnvelopeOpen} size='3x' className="faIcon" /><div className='textSize'>ZachariahMorris2000@gmail.com</div></div>
            </a>
          </div>
          <div className='mixIcon'>
            <div className='iconText'><FontAwesomeIcon icon={faSquarePhone} size='3x' className="faIcon" /><div className='textSize'>(813) 570 5140</div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact