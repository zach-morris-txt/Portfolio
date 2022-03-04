import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

import '../Styles/Contact.css'
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
      <div className='container'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='form-group'>
            <input type="text" id='subject-contact' name='subject' value='Contact' readOnly/>
          </div>
          <div className='form-group'>
            <input type="text" id='name' name='name' placeholder='Name'></input>
          </div>
          <div className='form-group'>
            <input type="email" id='email' name='email' placeholder='Email' required></input>
          </div>
          <div className='form-group'>
            <textarea id='message' name='message' placeholder='Email Me' cols="30" rows="10" required></textarea>
          </div>
          <input type="submit" value='Send' readOnly/>
        </form>
      </div>
      <div id='status'></div>

      <div className=''>
        <div className=''>LinkedIn</div>
        <div className=''>GitHub</div>
        <div className=''>Email -professional-</div>
        <div className=''>phone#???</div>
      </div>
      <Footer />
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </div>
  )
}

export default Contact