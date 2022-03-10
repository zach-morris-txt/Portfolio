import React from 'react'

import '../Styles/CertsList.css'
import adobePhoto from '../Assets/Images/AdobePhotoshop.jpg'
import adobeIllus from '../Assets/Images/AdobeIllustrator.jpg'
import adobeInDes from '../Assets/Images/AdobeInDesign.jpg'


const CertsList = () => {
  return (
    <div className='certListContainer'>
      <div className='certificate'>
        <h5>Adobe Photoshop</h5>
        <img src={adobePhoto} className="certImg" alt="certificate item"/>
      </div>
      <div className='certificate'>
        <h5>Adobe Illustrator</h5>
        <img src={adobeIllus} className="certImg" alt="certificate item"/>
      </div>
      <div className='certificate'>
        <h5>Adobe InDesign</h5>
        <img src={adobeInDes} className="certImg" alt="certificate item"/>
      </div>
    </div>
  )
}

export default CertsList