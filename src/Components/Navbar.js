import { Link } from 'react-router-dom'

import '../Styles/Navbar.css'
import manillaFull from '../Assets/Images/manillaFull.png'
import résumé from '../Assets/Images/Résumé.png'
import manillaSlide from '../Assets/Images/manillaSlide.png'


const Navbar = () => {
    return (
        <div>
            <div id='nav-container' className='nav-container'>
                <div className='nav-left'>
                    <div className='nav-top'>
                        <Link to="/" className='nav-links' id='about-link'>Home</Link>
                        <Link to="/about" className='nav-links' id='about-link'>About</Link>
                        <Link to="/contact" className='nav-links'>Contact</Link>
                    </div>
                    <div id='navBottom' className=''>
                        <div id='name'>Zach Morris</div>
                        <div id='title'>Fullstack WebDev | Frontend Engineer</div>
                    </div>
                </div>
                <div className='nav-right'>
                    <div className='résumé-file'>
                        <img src={manillaFull} className='manillaBack' alt="manilla folder" />
                        <a href="#" className='résuméLink'>
                            <img src={résumé} className='résuméImg' alt="résumé icon" />
                        </a>
                        <img src={manillaSlide} className='manillaFront' alt="manilla folder" />
                    </div>
                </div>
            </div>
            <div className='titleReveal-container'>
            </div>
        </div>
    )
}

export default Navbar