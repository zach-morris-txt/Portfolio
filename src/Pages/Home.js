import React from 'react'

import '../index.css'
import NavbarReveal from '../Components/NavbarReveal'
import ProjectList from '../Components/ProjectList'
import CertsList from '../Components/CertsList'
import SkillsList from '../Components/SkillsList'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div className='scroll'>
      <NavbarReveal />
      <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
        <h3>Projects</h3>
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