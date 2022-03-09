import { Link } from 'react-router-dom'

import '../Styles/Navbar.css'
import manillaFull from '../Assets/Images/IconIMGs/manillaFull.png'
import résumé from '../Assets/Images/IconIMGs/Résumé.png'
import manillaSlide from '../Assets/Images/IconIMGs/manillaSlide.png'


const Navbar = () => {
    return (
        <div>
            <div id='navContainer' className='navContainer'>
                <div className='navLeft'>
                    <div className='navTop'>
                        <Link to="/" className='navLinks' id='homeLink'>Home</Link>
                        <Link to="/about" className='navLinks' id='aboutLink'>About</Link>
                        <Link to="/contact" className='navLinks' id='contactLink'>Contact</Link>
                    </div>
                    <div id='navBottom'>
                        <h1 className='name'>Zach Morris</h1>
                        <h2 className='career'>Fullstack WebDev | Frontend Engineer</h2>
                    </div>
                </div>
                <div className='navRight'>
                    <div className='résuméFile'>
                        <img src={manillaFull} className='manillaBack' alt="manilla folder" />
                        <a href="#" className='résuméLink'>
                            <img src={résumé} className='résuméImg' alt="résumé icon" />
                        </a>
                        <img src={manillaSlide} className='manillaFront' alt="manilla folder" />
                    </div>
                </div>
            </div>
            <div className='titleRevealContainer'>
            </div>
        </div>
    )
}

export default Navbar