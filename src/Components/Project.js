import React from 'react'

import '../Styles/Project.css'


const Project = ({ item }) => {
  return (
    <div className='projectContainer' key={item.id}>
      <div className='left'>
          <div id='projectTitleWrap'>
            <h4 id='projectTitle'>{item.title}</h4>
          </div>
          <div className='infoWrapper'>
            <p id='itemInfoDescription'>{item.description1}</p>
            <p id='itemInfoTech'>{item.techStack}</p>
          </div>
        <div className='itemLinks'>
          <a href={item.deployedLink} target="_blank" rel="noreferrer" className='itemInfo'>Live Version</a>
          {item.githubLink2? 
            <a href={item.githubLink2} target="_blank" rel="noreferrer" className='itemInfo'>GitHub Backend</a>
            : <></>
          }
          <a href={item.githubLink} target="_blank" rel="noreferrer" className='itemInfo'>GitHub Frontend</a>
        </div>
      </div>
      <div className='projectImgContainer'>
          <img src={item.coverImg} className="projectImg" alt="Project Item"/>
      </div>
    </div>
  )
}

export default Project;