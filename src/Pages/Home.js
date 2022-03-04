import React from 'react'

import NavbarReveal from '../Components/NavbarReveal'
import ProjectList from '../Components/ProjectList'
import CertsList from '../Components/CertsList'
import SkillsList from '../Components/SkillsList'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
        <NavbarReveal />
        <ProjectList />
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%", textAlign: "center"}}>
          <h2>BloomTech (FKA LambdaSchool)</h2>
          <h3>?Curriculum Listed?</h3>
        </div>
        <CertsList />
        <SkillsList />
        <Footer />
    </div>
  )
}

export default Home