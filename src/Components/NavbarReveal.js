import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Navbar.css'
import manillaFull from '../Assets/Images/manillaFull.png'
import résumé from '../Assets/Images/Résumé.png'
import manillaSlide from '../Assets/Images/manillaSlide.png'


const NavbarReveal = () => {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        var titleReveal = document.querySelector(".titleReveal-container")
        var titleRevealHeight = titleReveal.offsetHeight
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > (0.5 * titleRevealHeight));
        });
    }, []);

    return (
        <div>
            <div id='nav-container' className='nav-container'>
                <div className='nav-left'>
                    <div className='nav-top'>
                        <Link to="/about" className='nav-links' id='about-link'>About</Link>
                        <Link to="/contact" className='nav-links'>Contact</Link>
                    </div>
                    <div id='navBottom' className={scroll ? "nav-bottom-show" : "nav-bottom-hide"}>
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
                TitleReveal
            </div>
        </div>
    )
}

export default NavbarReveal