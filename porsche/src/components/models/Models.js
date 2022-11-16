import React from 'react'
import "./models.css"

function Models() {
  return (
    <div className='models-container'>
      <h1 className='models-title'>Models</h1>
      <div className='model-categories'>
        <div className='model-image'>
          <img className="model-image-img"src="./images/models/718.jpeg" alt=""/>
          <div className='model-info'>
            <h3 className='model-numbder'>718</h3>
            <h4 className='model-price'>From $63,400*</h4>
          </div>
          <div className='model-links'>
            <button className='build-porsche'><img className='link-image'src="./images/arrow.svg" alt="link"/>Build Your Porsche</button>
            <button className='all-models'><span className='arrow'>{'>'} </span>All Models</button>
          </div>
        </div>
        <div className='model-image'>
          <img className="model-image-img"src="./images/models/911.jpeg" alt=""/>
          <div className='model-info'>
            <h3 className='model-numbder'>911</h3>
            <h4 className='model-price'>From $106,100*</h4>
          </div>
          <div className='model-links'>
            <button className='build-porsche'><img className='link-image'src="./images/arrow.svg" alt="link"/>Build Your Porsche</button>
            <button className='all-models'><span className='arrow'>{'>'} </span>All Models</button>
          </div>
          </div>
        <div className='model-image'>
          <img className="model-image-img"src="./images/models/taycan.jpeg" alt=""/>
          <div className='model-info'>
            <h3 className='model-numbder'>Taycan</h3>
            <h4 className='model-price'>From $86,700*</h4>
          </div>
          <div className='model-links'>
            <button className='build-porsche'><img className='link-image'src="./images/arrow.svg" alt="link"/>Build Your Porsche</button>
            <button className='all-models'><span className='arrow'>{'>'} </span>All Models</button>
          </div>
          </div>
        <div className='model-image'>
          <img className="model-image-img"src="./images/models/panamera.jpeg" alt=""/>
          <div className='model-info'>
            <h3 className='model-numbder'>Panamera</h3>
            <h4 className='model-price'>From $92,400*</h4>
          </div>
          <div className='model-links'>
            <button className='build-porsche'><img className='link-image'src="./images/arrow.svg" alt="link"/>Build Your Porsche</button>
            <button className='all-models'><span className='arrow'>{'>'} </span>All Models</button>
          </div>
          </div>
        <div className='model-image'>
          <img className="model-image-img"src="./images/models/macan.jpeg" alt=""/>
          <div className='model-info'>
            <h3 className='model-numbder'>Macan</h3>
            <h4 className='model-price'>From $57,500*</h4>
          </div>
          <div className='model-links'>
            <button className='build-porsche'><img className='link-image'src="./images/arrow.svg" alt="link"/>Build Your Porsche</button>
            <button className='all-models'><span className='arrow'>{'>'} </span>All Models</button>
          </div>
          </div>
        <div className='model-image'>
          <img className="model-image-img"src="./images/models/cayenne.jpeg" alt=""/>
          <div className='model-info'>
            <h3 className='model-numbder'>Cayenne</h3>
            <h4 className='model-price'>From $72,200*</h4>
          </div>
          <div className='model-links'>
            <button className='build-porsche'><img className='link-image'src="./images/arrow.svg" alt="link"/>Build Your Porsche</button>
            <button className='all-models'><span className='arrow'>{'>'} </span>All Models</button>
          </div>
          </div>
        </div>
        <p className="small-print">*Manufacturer’s Suggested Retail Price. Excludes options; taxes; title; registration; delivery, processing and handling fee; dealer charges. Dealer sets actual selling price.</p>
    </div>
  )
}

export default Models