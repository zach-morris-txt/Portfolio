import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

import '../Styles/SkillsList.css'
import { skills } from '../Assets/data'


const SkillsList = () => {
  const [reveal, setReveal] = useState(false)

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
    <div className='skillListContainer'>
      {skills.map((item) => 
        <div key={item.id} >
          <p>{item.title}</p>
          <img src={item.coverImg} className="skillImg" alt="skill item"/>
        </div>
      )}
      <button onClick={()=>setReveal(!reveal)}>Suggest A Skill</button>
      { reveal?
        <div className=''>
          <div className='container'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-group'>
                <input type="text" id='subject-contact' name='subject' value='Skill Suggestion' readOnly/>
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
          <div id='status' />
        </div>
        : <></>
      }
    </div>
  )
}

export default SkillsList