import React from 'react'
import "./dealerships.css"

function Dealerships() {
  return (
    <div className='dealerships-container'>
      <h1 className='dealership-title'>Find a Dealer</h1>
      <div className='dealership-locator'>
          <iframe width="760" height="500" className="gmap" id="gmap_canvas" src="https://maps.google.com/maps?q=&t=&z=1&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <div className='search-dealership'>
          <button className='use-location'><span><img alt=""className='loc-img' src="./images/location.svg"/></span>Use my location</button>
          <h4 className='or'>Or</h4>
          <div className='search-param'>
          <input type="text" className='input-location' placeholder='City/State or Zip'/>
          <button type="button" className='input-submit'>{'>'} Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dealerships