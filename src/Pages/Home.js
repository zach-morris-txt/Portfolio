import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import '../Styles/HomePage.css'
import NavbarReveal from '../Components/NavbarReveal'
import ProjectList from '../Components/ProjectList'
import CertsList from '../Components/CertsList'
import SkillsList from '../Components/SkillsList'
import Footer from '../Components/Footer'
import slide from '../Assets/Images/Home.jpg'
import bloom from '../Assets/Images/BloomTech.jpg'


const Home = () => {
  return (
    <div>
      <NavbarReveal />
      <div className='slide'>
          <img src={slide} id='slideImg' alt="Neon Grid Design" />
          <h3 id='slideText'>My Work</h3>
          <a href='#projects'><FontAwesomeIcon icon={faChevronDown} size='4x' id='chevronIcon' /></a>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
        <h3 id='projects'>Projects</h3>
        <ProjectList />
        <h3>Certifications</h3>
        <h4>BloomTech (FKA LambdaSchool)</h4>
        <div className='bloomRow'>
          <img src={bloom} id='bloomTech' alt="Neon Grid Design" />
          <div className='curriculum'>
            <div className='curriculumItem'><h6>Web Foundations</h6><p>HTML, CSS, Git, JavaScript And UI Principles</p></div>
            <div className='curriculumItem'><h6>Web Application Development</h6><p>‍React, Redux, React Router, HTTP/Ajax, And Functional Programming Techniques</p></div>
            <div className='curriculumItem'><h6>Advanced Web Development</h6><p>Advanced React, State Management, And Web Applications</p></div>
            <div className='curriculumItem'><h6>Backend Development</h6><p>Node.js Web APIs, Data Persistence, Authentication, And Testing</p></div>
            <div className='curriculumItem'><h6>Computer Science</h6><p>‍Intro To Python And OOP, Algorithms, Data Structures, Graphs, And Hash Tables</p></div>
            <div className='curriculumItem'><h6>Stakeholder Experience</h6><p>AGILE Development Apprenticeship Alongside Industry Non-Profit</p></div>
          </div>
        </div>
        <CertsList />
        <h3>Skills</h3>
        <SkillsList />
      </div>
      <Footer />
    </div>
  )
}

export default Home