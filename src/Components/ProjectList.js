import React from 'react'

import Project from './Project'
import { projects } from '../Assets/data'


const ProjectList = () => {
  return (
    <div>
        {projects.map((item) => <Project item={item} key={item.id} />)}
    </div>
  )
}

export default ProjectList