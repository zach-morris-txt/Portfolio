import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Navbar.css'
import manillaFull from '../Assets/Images/manillaFull.png'
import résumé from '../Assets/Images/Résumé.png'
import manillaSlide from '../Assets/Images/manillaSlide.png'


const NavbarReveal = () => {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        var titleReveal = document.querySelector(".titleRevealContainer")
        var titleRevealHeight = titleReveal.offsetHeight
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > (0.5 * titleRevealHeight));
        });
    }, []);

    return (
        <div>
            <div id='navContainer' className='navContainer'>
                <div className='navLeft'>
                    <div className='navTop'>
                        <Link to="/about" className='navLinks' id='aboutLink'>About</Link>
                        <Link to="/contact" className='navLinks'>Contact</Link>
                    </div>
                    <div id='navBottom' className={scroll ? "navBottomShow" : "navBottomHide"}>
                        <h1>Zach Morris</h1>
                        <h2>Fullstack WebDev | Frontend Engineer</h2>
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
                <div className='bottomNav'>
                    <h1>Zach Morris</h1>
                    <h2>Fullstack WebDev | Frontend Engineer</h2>
                </div>
            </div>
        </div>
    )
}

export default NavbarReveal