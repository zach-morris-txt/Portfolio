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
      <div className='skills'>
        {skills.map((item) => 
          <div className='skill'key={item.id}>
            <p className='skillName'>{item.name}</p>
            <div className='imgIconWrap'>
              <img src={item.img} className='imgIcon skillIcon' alt={item.imgAlt} />
              {item.img2? <img src={item.img2} className='imgIcon skillIcon' alt={item.img2Alt} />
              : <></>}
            </div>
          </div>        
        )}
      </div>
      <div className={reveal? 'skillForm' : 'skillFormAlt' }>
        <button className={reveal? 'suggestSkillBtn blueHover' : 'suggestSkillBtnAlt blueHover'} onClick={()=>setReveal(!reveal)}>Skill<br />Suggestion</button>
        { reveal?
          <div className='skillFormWrap'>
              <form ref={form} className='skillInputs' onSubmit={sendEmail}>
                <div>
                  <div className='formItem'>
                    <input type="text" className='subject' name='subject' value='Skill Suggestion' readOnly/>
                  </div>
                  <div className='formItem'>
                    <input type="text" className='formSkillInput' id='name' name='name' placeholder='Name'></input>
                  </div>
                  <div className='formItem'>
                    <input type="email" className='formSkillInput' id='email' name='email' placeholder='Email' required></input>
                  </div>
                  <div className='formItem'>
                    <textarea className='formSkillInput' id='skillMessage' name='message' placeholder='Email Me' cols="30" rows="10" required></textarea>
                  </div>
                </div>
                <div className='btnsWrapper'>
                  <button className='skillBtn blueHover' onClick={()=>setReveal(!reveal)}>X</button>
                  <input className='skillBtn' type="submit" value='Send' readOnly/>
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

export default SkillsList