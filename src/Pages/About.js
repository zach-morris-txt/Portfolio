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
          <div className='aboutBold'>Tampa, FL- I am a JavaScript/ Node.js Developer.</div>
          <p className='aboutRegular'>I hold the scandalous conviction that the peacock is better than the rhino,
            though, I mostly hold this view because the rhino is twice as costly. I'll change my tune as soon as someone mails me a free copy</p>
          <div className='aboutBooks'>
            <img src={definitiveJS} className='jsBooks' alt='Definitive JavaScript Book' />
            <img src={eloquentJS} className='jsBooks' alt='Eloquent JavaScript Book' />
          </div>
          <p className='aboutRegular'>I've had a life-long passion for circuitry, code, and economics. There's something about unravelling a stubborn puzzle that really calls to me. Fortunately, 
            Computer Science is riddled with stubborn bugs. I have freelancer ambitions and I'd like to learn some software development; at least enough to be dangerous.</p>
          <div className='aboutRegular'><div className='aboutBold'>Interests:</div> Arduino, Homesteading, Make: Magazine, Motorcycles, The Rich Dad Podcast</div>
        </div>
        <div className='aboutImgs'>
          <button id='aboutButton blueHover' onClick={()=>setReveal(!reveal)}>{reveal? 'A Less Horrifying Photo' : 'Hacker Man'}</button>
          <img src={about1} className='aboutImg' id='about1' alt='Zach Morris' />
          <img src={about2} className='aboutImg' id={reveal? 'about2Show' : 'about2Hide'} alt='Zach Morris' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About