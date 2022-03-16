import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

import '../Styles/SkillsList.css'
import html from '../Assets/Images/IconIMGs/HTML.png'
import css from '../Assets/Images/IconIMGs/CSS.png'
import js from '../Assets/Images/IconIMGs/JS.png'
import python from '../Assets/Images/IconIMGs/Python.png'
import node from '../Assets/Images/IconIMGs/Node.png'

import reactRedux from '../Assets/Images/IconIMGs/ReactRedux.png'
import postgreSQL from '../Assets/Images/IconIMGs/PostgreSQL.png'
import mongoDB from '../Assets/Images/IconIMGs/MongoDB.png'
import git from '../Assets/Images/IconIMGs/Git.png'


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
      <div className='skills'>
        <div className='skill'>
          <p className='skillName'>HTML/CSS</p>
          <div className='imgIconWrap'>
            <img src={html} className='imgIcon skillIcon' alt='JavaScript Icon' />
            <img src={css} className='imgIcon skillIcon' alt='JavaScript Icon' />
          </div>
        </div>
        <div className='skill'>
          <p className='skillName'>JS</p>
          <div className='imgIconWrap'>
            <img src={js} className='imgIcon skillIcon' alt='JavaScript Icon' />
          </div>
        </div>
        <div className='skill'>
          <p className='skillName'>Node</p>
          <div className='imgIconWrap'>
            <img src={node} className='imgIcon skillIcon' alt='JavaScript Icon' />
          </div>        
        </div>
        <div className='skill'>
          <p className='skillName'>React/Redux</p>
          <div className='imgIconWrap'>
            <img src={reactRedux} className='imgIcon skillIcon' alt='React And Redux Icons' />
          </div>
        </div>
        <div className='skill'>
          <p className='skillName'>Python</p>
          <div className='imgIconWrap'>
            <img src={python} className='imgIcon skillIcon' alt='JavaScript Icon' />
          </div>        
        </div>
        <div className='skill'>
          <p className='skillName'>PostgreSQL</p>
          <div className='imgIconWrap'>
            <img src={postgreSQL} className='imgIcon skillIcon' alt='PostgreSQL Icon' />
          </div>
        </div>
        <div className='skill'>
          <p className='skillName'>MongoDB</p>
          <div className='imgIconWrap'>
            <img src={mongoDB} className='imgIcon skillIcon' alt='MongoDB Icon' />
          </div>
        </div>
        <div className='skill'>
          <p className='skillName'>Git</p>
          <div className='imgIconWrap'>
            <img src={git} className='imgIcon skillIcon' alt='Git Icon' />
          </div>
        </div>
      </div>
      <button onClick={()=>setReveal(!reveal)}>Suggest A Skill</button>
      { reveal?
        <div>
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