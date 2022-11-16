import React from 'react'
import './tools.css'

function Tools() {
  return (
    <div className='shopping-tools-container'>
      <h2 className='tools-title'>Shopping Tools</h2>
      <div className='tools-container'>
        <div className='compare'>
          <div className='tool-link'><button><span className='arrow'>{'>'}</span>Compare</button></div>
        </div>
        <div className='build'>
        <div className='tool-link'><button><span className='arrow'>{'>'}</span>Build your Porsche</button></div>
        </div>
        <div className='offers'>
        <div className='tool-link'><button><span className='arrow'>{'>'}</span>Current Offers</button></div>
        </div>
        <div className='finance'>
        <div className='tool-link'><button><span className='arrow'>{'>'}</span>Financial Services</button></div>
        </div>
      </div>
    </div>
  )
}

export default Tools