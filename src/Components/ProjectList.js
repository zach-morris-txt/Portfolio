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
        <button className='emailButton' onClick={()=>setReveal(!reveal)}>Suggest A Project</button>
        { reveal?
          <div>
            <div className='container'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='formItem'>
                  <input type="text" className='subject' name='subject' value='Project Suggestion' readOnly/>
                </div>
                <div className='formItem'>
                  <input type="text" className='formItemInput' name='name' placeholder='Name'></input>
                </div>
                <div className='formItem'>
                  <input type="email" className='formItemInput' name='email' placeholder='Email' required></input>
                </div>
                <div className='formItem'>
                  <textarea className='formItemInput' name='message' placeholder='Email Me' cols="30" rows="10" required></textarea>
                </div>
                <input type="submit" value='Send' readOnly/>
              </form>
            </div>
            <div id='status' />
          </div>
          : <></>
        }
      </div>
    </div>
  )
}

export default ProjectList