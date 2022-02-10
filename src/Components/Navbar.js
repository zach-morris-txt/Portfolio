import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='nav-left'>
            <div className='nav-top'>
                <Link to="">About</Link>
                <Link to="">Contact</Link>
            </div>
            <div className='nav-bottom'>
                <p>Zach Morris</p>
                <p>Fullstack WebDev | Frontend Engineer</p>
            </div>
        </div>
        <div className='nav-right'>
            <Link to="">
                <div className='resume-file'>Résumé File</div>
                {/* <img src={} alt-"" /> */}
            </Link>
        </div>
    </div>
  )
}

export default Navbar