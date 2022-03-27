import React from 'react'

import Navbar from '../Components/Navbar'
import résumé from '../Assets/ZachMorris.pdf'


const PDF = () => {
  return (
    <div>
        <Navbar />
        <div style={{width:"100%", height:"78vh", overflow: "hidden"
 }} >
            <iframe src={`${résumé}#view=fitW`} title="Résumé PDF" width="100%" height="100%" />
        </div>
    </div>
  )
}

export default PDF