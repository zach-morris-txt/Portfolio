import React from 'react'

import Navbar from '../Components/Navbar'
import résumé from '../Assets/ZachMorris.pdf'


const PDF = () => {
  return (
    <div>
        <Navbar />
        <div style={{width:"100%", height:"78vh"}} >
            <embed src={résumé} type="application/pdf" width="100%" height="100%" />
        </div>
    </div>
  )
}

export default PDF