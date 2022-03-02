import React from 'react'

import '../Styles/ProjectList.css'
import Project from './Project.js'
import { projects } from '../Assets/data'


const ProjectList = () => {
  return (
    <div className='projectList-container'>
        {projects.map((item) => 
          <Project item={item} key={item.id} />
        )}
    </div>
  )
}

export default ProjectList