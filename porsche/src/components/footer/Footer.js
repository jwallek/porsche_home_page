import React from 'react'
import './footer.css'
import './DropdownMenu'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <h3 className='top-title'>Change country/region:</h3>
        <div className='dropdown-menus'>
        <form name="form1" id="form1">
          <select name="country" id="country" className='select'>
            <option value="" selected="selected">Select a region</option>
          </select>
        <br/>
          <select name="region" id="region" className='select' disabled>
            <option value="" selected="selected">Select a country/region</option>
          </select>
        <br/> 
        </form>
        </div>
      </div>
      <hr className='footer-divider'/>
      <div className='footer-bottom'>
        <h5 className='copyright'>© 2022 Porsche Cars North America, Inc. <u>Legal notice.</u> <u>Privacy Notice.</u>  <u>Accessibility Statement.</u> <u>Open Source Software Notice.</u></h5>
        <div className='links'>
          <button className='footer-link'>{'>'} Contact us</button>
          <button className='footer-link'>{'>'} Recall Information</button>
          <button className='footer-link'>{'>'} 3G Wireless Turndown FAQs</button>
          <button className='footer-link'>{'>'} Do not sell my personal information</button>
        </div>
      </div>
    </div>
  )
}

export default Footer