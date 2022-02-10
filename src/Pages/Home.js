import React from 'react'

import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ProjectList from '../Components/ProjectList'


const Home = () => {
  return (
    <div>
        <Navbar />
        <ProjectList />
        <Footer />
    </div>
  )
}

export default Home