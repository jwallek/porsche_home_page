import React from 'react'
import './herosection.css'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

const AutoplaySlider = withAutoplay(AwesomeSlider)

function HeroSection() {
  return (
    <div className='hero-section-container'>
      <AutoplaySlider organicArrows={true} infinite={true} bullets={false} play={true} interval={4000} customContent={true} className="slider">
<div className="img-slide-container">
<img src="./images/hero/porsche1.jpg" alt="porsche" className='porsche-slider-img'/>
<h2 className='img-text'><span className='red'>{'>'}</span> Ready.  Set.  Race.</h2>  
<p className='img-text'> Participate in the Porsche Esports Challenge today.</p>
</div>
<div className="img-slide-container">
<img src="./images/hero/porsche4.jpg" alt="porsche" className='porsche-slider-img'/>

  <h2 className='img-text'><span className='red'>{'>'}</span> Pure power. Pure exhilation.</h2>
  
  <p className='img-text'> Drive the 911 Turbo S at the Porsche Experience Center Atlanta</p>

</div>
<div className="img-slide-container">
<img src="./images/hero/porsche3.jpg" alt="porsche" className='porsche-slider-img'/>

  <h2 className='img-text'><span className='red'>{'>'}</span> Sports Car Together Fest 2022.</h2>
  
  <p className='img-text'> Indianapolis Motor Speedway.Sept 2-4, 2022.</p>

</div>
<div className="img-slide-container">
<img src="./images/hero/porsche2.jpg" alt="porsche" className='porsche-slider-img'/>

  <h2 className='img-text'><span className='red'>{'>'}</span> Sportmade.</h2>
  
  <p className='img-text'> The new 911 GT3 RS.</p>

</div>
<div className="img-slide-container">
<img src="./images/hero/porsche5.jpg" alt="porsche" className='porsche-slider-img'/>

  <h2 className='img-text'><span className='red'>{'>'}</span> Drive the 911 GT3 and 718 GT4.Back-to-back.</h2>
  
  <p className='img-text'> Book now at the Porsche Experience Center Los Angeles.</p>

</div>
</AutoplaySlider>
    </div>
  )
}

export default HeroSection


