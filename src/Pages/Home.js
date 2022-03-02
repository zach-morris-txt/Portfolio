import React from 'react'

import NavbarReveal from '../Components/NavbarReveal'
import ProjectList from '../Components/ProjectList'
import CertsList from '../Components/CertsList'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
        <NavbarReveal />
        <ProjectList />
        <CertsList />
        <Footer />
    </div>
  )
}

export default Home