import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'

import '../Styles/ProjectList.css'
import Project from './Project.js'
import { projects } from '../Assets/data'


const ProjectList = () => {
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
    <div className='projectListContainer'>
      {projects.map((item) => 
        <Link to={`/project/${item.id}`}>
          <Project item={item} key={item.id} />
        </Link>
      )}
      <div className='projectForm'>
        <button className='suggestProjectBtn' onClick={()=>setReveal(!reveal)}>Project<br />Suggestion</button>
        { reveal?
          <div>
            <form ref={form} className='projectInputs' onSubmit={sendEmail}>
                <div>
                  <div className='formItem'>
                    <input type="text" className='subject' name='subject' value='Project Suggestion' readOnly/>
                  </div>
                  <div className='formItem'>
                    <input type="text" className='formProjectInput' name='name' placeholder='Name'></input>
                  </div>
                  <div className='formItem'>
                    <input type="email" className='formProjectInput' name='email' placeholder='Email' required></input>
                  </div>
                  <div className='formItem'>
                    <textarea className='formProjectInput' id='projectMessage' name='message' placeholder='Email Me' cols="30" rows="10" required></textarea>
                  </div>
                </div>
                <div className='btnsWrapper'>
                  <button className='projectBtn' onClick={()=>setReveal(!reveal)}>X</button>
                  <input className='projectBtn' type="submit" value='Send' readOnly/>
                </div>
            </form>
            <div id='status' />
          </div>
          : <></>
        }
      </div>
    </div>
  )
}

export default ProjectList