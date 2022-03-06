import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

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
        <div className='container'>
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
        <div>
          <div className='contactLink'>LinkedIn</div>
          <div className='contactLink'>GitHub</div>
          <div className='contactLink'>Email -professional-</div>
          <div className='contactLink'>phone#???</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact