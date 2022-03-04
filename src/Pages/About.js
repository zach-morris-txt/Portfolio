import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import about from '../Assets/Images/About.jpg'


const About = () => {
  return (
    <div>
      <Navbar />
      <div className=''>
        <p>lorem ipsum BIO</p>
        <img src={about} alt='Zach Morris' />
      </div>
      <Footer />
    </div>
  )
}

export default About