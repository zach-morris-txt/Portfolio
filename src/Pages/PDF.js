import React from 'react'

import Navbar from '../Components/Navbar'


const PDF = () => {
  return (
    <div>
        <Navbar />
        <div style={{width:"99.7%", height:"77.4vh"}} >
          <iframe src="ZachMorris.pdf#zoom=FitW&#toolbar=0&#view=fitW" title="Résumé PDF" width="100%" height="100%"></iframe>
        </div>
    </div>
  )
}

export default PDF