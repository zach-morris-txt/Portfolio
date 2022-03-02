import React from 'react'

import '../Styles/CertsList.css'
import { certs } from '../Assets/data'


const CertsList = () => {
  return (
    <div className='certList-container'>
        {certs.map((item) => 
            <div>
                <p>{item.title}</p>
                <img src={item.coverImg} className="cert-img" alt="certificate item"/>
            </div>
        )}
    </div>
  )
}

export default CertsList