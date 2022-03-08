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
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%", textAlign: "center"}}>
          <h4>BloomTech (FKA LambdaSchool)</h4>
          <h4>?Curriculum Listed?</h4>
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