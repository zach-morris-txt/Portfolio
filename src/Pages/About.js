import React, { useState } from 'react'

import '../Styles/PageAbout.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import about1 from '../Assets/Images/About1.jpg'
import about2 from '../Assets/Images/About2.jpg'
import eloquentJS from '../Assets/Images/AboutEloquentJS.jpg'
import definitiveJS from '../Assets/Images/AboutDefinitiveJS.jpg'


const About = () => {
  const [reveal, setReveal] = useState(false)

  return (
    <div>
      <Navbar />
      <div className='aboutContainer'>
        <div className='aboutText'>
          <div className='aboutBold'><span className='aboutItalic'>Tampa, FL</span> - I am a JavaScript/ Node.js Developer.</div>
          <p className='aboutRegular'>I hold the scandalous conviction that the peacock is better than the rhino. However, I hold this view strictly because the rhino is twice as costly.
          If anyone would like to change my mind by mailing me a free copy you are more than welcome to do so, I embrace incorrect opinions.</p>
          <div className='aboutBooks'>
            <img src={definitiveJS} className='jsBooks' alt='Definitive JavaScript Book' loading="lazy" />
            <img src={eloquentJS} className='jsBooks' alt='Eloquent JavaScript Book' loading="lazy" />
          </div>
          <p className='aboutRegular'>I've had a life-long passion for circuitry, code, and economics. There's something about unravelling a stubborn puzzle that really calls to me. Fortunately, 
            Computer Science is riddled with stubborn bugs. I have freelancer ambitions and I'd like to learn some software development; at least enough to be dangerous.</p>
          <div className='aboutRegular'><div className='aboutBold'>Interests:</div> Arduino, Homesteading, Make: Magazine, Motorcycles, The Rich Dad Podcast</div>
        </div>
        <div id='aboutImgs' className={reveal? 'aboutImgs' : 'aboutImgsAlt'}>
          <button id='aboutButton' className='blueHover' onClick={()=>setReveal(!reveal)}>{reveal? 'Never Click Me Again' : 'Click Me'}</button>
          <img src={about1} className='aboutImg' id='about1' alt='Zach Morris' />
          <img src={about2} className='aboutImg' id={reveal? 'about2Show' : 'about2Hide'} alt='Zach Morris' loading="lazy"/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About