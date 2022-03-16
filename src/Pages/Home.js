import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

import '../Styles/HomePage.css'
import NavbarReveal from '../Components/NavbarReveal'
import ProjectList from '../Components/ProjectList'
import CertsList from '../Components/CertsList'
import SkillsList from '../Components/SkillsList'
import Footer from '../Components/Footer'
import slide from '../Assets/Images/PageHome.png'
import bloom from '../Assets/Images/BloomTech.jpg'


const Home = () => {
  return (
    <div id='fullContainer'>
      <NavbarReveal />
      <div className='slide'>
          <img src={slide} id='slideImg' alt="Neon Grid Design" />
          <div id='slideWrap'>
            <a href='#work' id='slideLink'><h3 id='slideText'>My Work</h3>
              <FontAwesomeIcon icon={faSortDown} size='4x' id='downIcon' />
            </a>
          </div>
          <div id='work'></div>
      </div>
      <div id='homeContainer'>
        <div id='work'></div>
        <div className='homeSubtitleWrap'>
          <h3 className='homeSubtitle'>Projects</h3>
        </div>
        <ProjectList />
        <div className='homeSubtitleWrap'>
          <h3 className='homeSubtitle'>Certifications</h3>
        </div>
        <div className='bloomColumn'>
          <div className='bloomRow'>
            <img src={bloom} id='bloomTech' alt="Neon Grid Design" />
            <div className='curriculum'>
              <h5 id='bloomSubtitle'>BloomTech Bootcamp (F.K.A. Lambda School)</h5>
              <div className='curriculumItem'><h6 className='curriculumTitle'>Web Foundations</h6><p className='curriculumText'>HTML, CSS, Git, JavaScript And UI Principles</p></div>
              <div className='curriculumItem'><h6 className='curriculumTitle'>Web Application Development</h6><p className='curriculumText'>‍React, Redux, React Router, HTTP/Ajax, And Functional Programming Techniques</p></div>
              <div className='curriculumItem'><h6 className='curriculumTitle'>Advanced Web Development</h6><p className='curriculumText'>Advanced React, State Management, And Web Applications</p></div>
              <div className='curriculumItem'><h6 className='curriculumTitle'>Backend Development</h6><p className='curriculumText'>Node.js Web APIs, Data Persistence, Authentication, And Testing</p></div>
              <div className='curriculumItem'><h6 className='curriculumTitle'>Computer Science</h6><p className='curriculumText'>‍Intro To Python And OOP, Algorithms, Data Structures, Graphs, And Hash Tables</p></div>
              <div className='curriculumItem'><h6 className='curriculumTitle'>Stakeholder Experience</h6><p className='curriculumText'>AGILE Development Apprenticeship Alongside Industry Non-Profit</p></div>
            </div>
          </div>
        </div>
        <CertsList />
        <div className='homeSubtitleWrap'>
          <h3 className='homeSubtitle'>Skills</h3>
        </div>
        <SkillsList />
      </div>
      <Footer />
    </div>
  )
}

export default Home