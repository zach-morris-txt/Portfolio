import React from 'react'

import '../Styles/Project.css'


const Project = ({ item }) => {
  return (
    <div className='project-container' key={item.id}>
        <p>{item.title}</p>
        <div className='projectImg-container'>
          <img src={item.coverImg} className="project-img" alt="project item"/>
        </div>
        <p>{item.description1}</p>
        <p>{item.techStack}</p>
        <a href={item.deployedLink} target="_blank" rel="noreferrer">Live Version</a>
        <a href={item.githubLink} target="_blank" rel="noreferrer">GitHub</a>
    </div>
  )
}

export default Project;