import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Project.css'


const Project = ({ item }) => {
  return (
    <div className='projectContainer' key={item.id}>
      <Link to={`/project/${item.id}`}>
        <h4>{item.title}</h4>
        <div className='projectImgContainer'>
          <img src={item.coverImg} className="projectImg" alt="project item"/>
        </div>
        <div className='infoWrapper'>
          <p className='itemInfo'>{item.description1}</p>
          <p className='itemInfo'>{item.techStack}</p>
        </div>
      </Link>
        <a href={item.deployedLink} target="_blank" rel="noreferrer" className='itemInfo'>Live Version</a>
        <a href={item.githubLink} target="_blank" rel="noreferrer" className='itemInfo'>GitHub Frontend</a>
        {item.githubLink2? 
          <a href={item.githubLink2} target="_blank" rel="noreferrer" className='itemInfo'>GitHub Backend</a>
          : <></>
        }
    </div>
  )
}

export default Project;