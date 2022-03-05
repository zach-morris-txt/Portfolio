import React from 'react'

import '../Styles/CertsList.css'
import { certs } from '../Assets/data'


const CertsList = () => {
  return (
    <div className='certListContainer'>
        {certs.map((item) => 
            <div key={item.id} >
                <p>{item.title}</p>
                <img src={item.coverImg} className="certImg" alt="certificate item"/>
            </div>
        )}
    </div>
  )
}

export default CertsList