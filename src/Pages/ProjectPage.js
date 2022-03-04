import React from 'react'
import { useParams } from 'react-router-dom'

import { projects } from '../Assets/data'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const ProjectPage = () => {
    const {id} = useParams()
    const item = projects[id]
    return (
        <div>
            <Navbar />
            <h1>??Deploy Live Versions To This URL??</h1>
            <div>ProjectPage #{id}</div>
                <div className='project-container' key={item.id}>
                <p>{item.title}</p>
                <div className='projectImg-container'>
                <img src={item.coverImg} className='project-img' alt="project item"/>
                </div>
                <p>{item.description1}</p>
                <p>{item.techStack}</p>
                <a href={item.deployedLink} target="_blank" rel="noreferrer">Live Version</a>
                <a href={item.githubLink} target="_blank" rel="noreferrer">GitHub Frontend</a>
                {item.githubLink2? 
                <a href={item.githubLink2} target="_blank" rel="noreferrer">GitHub Backend</a>
                : <></>
                }
            </div>
            <Footer />
        </div>
    )
}

export default ProjectPage