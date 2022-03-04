import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Project.css'


const Project = ({ item }) => {
  return (
    <div className='project-container' key={item.id}>
      <Link to={`/project/${item.id}`}>
        <p>{item.title}</p>
        <div className='projectImg-container'>
          <img src={item.coverImg} className="project-img" alt="project item"/>
        </div>
        <div className='info-wrapper'>
          <p className='item-info'>{item.description1}</p>
          <p className='item-info'>{item.techStack}</p>
        </div>
      </Link>
        <a href={item.deployedLink} target="_blank" rel="noreferrer" className='item-info'>Live Version</a>
        <a href={item.githubLink} target="_blank" rel="noreferrer" className='item-info'>GitHub Frontend</a>
        {item.githubLink2? 
          <a href={item.githubLink2} target="_blank" rel="noreferrer" className='item-info'>GitHub Backend</a>
          : <></>
        }
    </div>
  )
}

export default Project;