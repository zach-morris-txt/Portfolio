import React from 'react'

import '../Styles/SkillsList.css'
import { skills } from '../Assets/data'


const SkillsList = () => {
  return (
    <div className='skillsList-container'>
        {skills.map((item) => 
            <div>
                <p>{item.title}</p>
                <img src={item.coverImg} className="skill-img" alt="skill item"/>
            </div>
        )}
    </div>
  )
}

export default SkillsList