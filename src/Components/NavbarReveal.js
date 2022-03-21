import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Navbar.css'
import manillaFull from '../Assets/Images/IconIMGs/manillaFull.png'
import résumé from '../Assets/Images/IconIMGs/0.png'
import manillaSlide from '../Assets/Images/IconIMGs/manillaSlide.png'


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
                        <Link to="/about" id='aboutLink'><div className='navLinks'>About</div></Link>
                        <Link to="/contact" id='contactLink'><div className='navLinks'>Contact</div></Link>
                    </div>
                    <div id='navBottom' className={scroll ? "navBottomShow" : "navBottomHide"}>
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
                <div className={scroll ? "bottomNavShow" : "bottomNavHide"}>
                    <h1 className='name'>Zach Morris</h1>
                    <h2 className='career'>Fullstack WebDev | Frontend Engineer</h2>
                </div>
            </div>
        </div>
    )
}

export default NavbarReveal