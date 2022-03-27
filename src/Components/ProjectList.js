import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com'

import '../Styles/ProjectList.css'
import Project from './Project.js'
import { projects } from '../Assets/data'


const ProjectList = () => {
  const navigate = useNavigate()
  const [reveal, setReveal] = useState(false)

  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();
    var status = document.getElementById('status')

    emailjs.sendForm('service_o41xzyd', 'template_c70amym', form.current, 'rRq4k2FhFObFtegju')
      .then((result) => {
        status.classList.add('success')
        status.innerHTML = "Success!"
      }, (error) => {
        status.classList.add('error')
        status.innerHTML = `Error: ${error}`
      });
      form.current.reset()
  }

  return (
    <div className='projectListContainer'>
      {projects.map((item) => 
        <button onClick={()=> navigate(`/project/${item.id}`)} key={item.id} style={{border: "none"}}>
          <Project item={item} />
        </button>
      )}
      <div className='projectForm'>
        <button className={reveal? 'suggestProjectBtnAlt blueHover' : 'suggestProjectBtn blueHover'} onClick={()=>setReveal(!reveal)}>Project<br />Suggestion</button>
        { reveal?
          <div>
            <form ref={form} className='projectInputs' onSubmit={sendEmail}>
                <div>
                  <div className='formItem'>
                    <input type="text" className='subject' name='subject' value='Project Suggestion' readOnly/>
                  </div>
                  <div className='formItem'>
                    <input type="text" className='formProjectInput inputText' name='name' placeholder='Name'></input>
                  </div>
                  <div className='formItem'>
                    <input type="email" className='formProjectInput inputText' name='email' placeholder='Email' required></input>
                  </div>
                  <div className='formItem'>
                    <textarea id='projectMessage' className='inputText' name='message' placeholder='Email Me' cols="30" rows="10" required></textarea>
                  </div>
                </div>
                <div className='btnsWrapper'>
                  <button className='projectBtn blueHover' onClick={()=>setReveal(!reveal)}>X</button>
                  <input className='projectBtn' type="submit" value='&#10004;' readOnly style={{border: "2px black solid"}} />
                </div>
            </form>
          </div>
          : <></>
        }
      </div>
      <div id='status' />
    </div>
  )
}

export default ProjectList