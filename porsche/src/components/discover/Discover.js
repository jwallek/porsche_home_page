import React from 'react'
import './discover.css'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'


function Discover() {
  return (
    <div className='discover-container'>
      <h2 className='title'>Discover</h2>
      <div className='discover-elements-lg'>
        <div className='element'>
          <div className='element-img'>
            <img alt="..." className='element-image' src="./images/discover/performance.webp"/>
          </div>
          <div className='element-link'>
            <h5>{'>'} Porsche E-Performance</h5>
          </div>
        </div>
        <div className='element'>
          <div className='element-img'>
          <img alt="..." className='element-image' src="./images/discover/dreams.webp"/>
          </div>
          <div className='element-link'>
          <h5><img className='link-image-element'src="./images/arrow.svg" alt="link"/> No Small Dreams</h5>
          </div>
        </div>
        <div className='element'>
          <div className='element-img'>
          <img alt="..." className='element-image' src="./images/discover/driving.webp"/>
          </div>
          <div className='element-link'>
          <h5><img className='link-image-element'src="./images/arrow.svg" alt="link"/> PorscheDriving.com</h5>
          </div>
        </div>
        <div className='element'>
          <div className='element-img'>
          <img alt="..." className='element-image' src="./images/discover/shop.webp"/>
          </div>
          <div className='element-link'>
          <h5><img className='link-image-element'src="./images/arrow.svg" alt="link"/> The Porsche Online Shop.</h5>
          </div>
        </div>
      </div>
      <div className='discover-elements'>
      <AwesomeSlider organicArrows={false} infinite={false} bullets={true} play={false} customContent={true} className='elementslider'>
<div className="element-slide-container">
      <div className='element'>
          <div className='element-img'>
            <img alt="..." className='element-image' src="./images/discover/performance.webp"/>
          </div>
          <div className='element-link'>
            <h5>{'>'} Porsche E-Performance</h5>
          </div>
        </div>
        <div className='element'>
          <div className='element-img'>
          <img alt="..." className='element-image' src="./images/discover/dreams.webp"/>
          </div>
          <div className='element-link'>
          <h5><img className='link-image-element'src="./images/arrow.svg" alt="link"/> No Small Dreams</h5>
          </div>
        </div>
</div>
<div className="element-slide-container">
<div className='element'>
          <div className='element-img'>
          <img alt="..." className='element-image' src="./images/discover/dreams.webp"/>
          </div>
          <div className='element-link'>
          <h5><img className='link-image-element'src="./images/arrow.svg" alt="link"/> No Small Dreams</h5>
          </div>
        </div>
        <div className='element'>
          <div className='element-img'>
          <img alt="..." className='element-image' src="./images/discover/driving.webp"/>
          </div>
          <div className='element-link'>
          <h5><img className='link-image-element'src="./images/arrow.svg" alt="link"/> PorscheDriving.com</h5>
          </div>
        </div>
</div>
<div className="element-slide-container">
<div className='element'>
          <div className='element-img'>
          <img alt="..." className='element-image' src="./images/discover/driving.webp"/>
          </div>
          <div className='element-link'>
          <h5><img className='link-image-element'src="./images/arrow.svg" alt="link"/> PorscheDriving.com</h5>
          </div>
        </div>
        <div className='element'>
          <div className='element-img'>
          <img alt="..." className='element-image' src="./images/discover/shop.webp"/>
          </div>
          <div className='element-link'>
          <h5><img className='link-image-element'src="./images/arrow.svg" alt="link"/> The Porsche Online Shop.</h5>
          </div>
        </div>
</div>
</AwesomeSlider>
      </div>
    </div>
  )
}

export default Discover;

