import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faNode, faReact, faPython, faGitSquare } from '@fortawesome/free-brands-svg-icons'

import '../Styles/SkillsList.css'


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
          <p>HTML/CSS</p>
          <div>
            <FontAwesomeIcon size='4x' icon={faHtml5} />
            <FontAwesomeIcon size='4x' icon={faCss3Alt} />
          </div>
        </div>
        <div className='skill'>
          <p>JS</p>
          <FontAwesomeIcon size='4x' icon={faJsSquare} />
        </div>
        <div className='skill'>
          <p>Python</p>
          <FontAwesomeIcon size='4x' icon={faPython} />
        </div>
        <div className='skill'>
          <p>Node</p>
          <FontAwesomeIcon size='4x' icon={faNode} />
        </div>
        <div className='skill'>
          <p>React</p>
          <FontAwesomeIcon size='4x' icon={faReact} />
        </div>
        <div className='skill'>
          <p>Redux</p>
        </div>
        <div className='skill'>
          <p>PostgreSQL</p>
        </div>
        <div className='skill'>
          <p>MongoDB</p>
        </div>
        <div className='skill'>
          <p>Git</p>
          <FontAwesomeIcon size='4x' icon={faGitSquare} />
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