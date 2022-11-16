import React from 'react'
import "./navbar.css"


function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar">
            <div className="navbar-logo">
                <div className='logo-container'>
                <img src="./images/porsche-vector-logo.png"alt="porsche logo" className="porsche-logo"/>
                </div>
            </div>
            <div className="hamburger-menu">
               <button onClick={toggleMenu} className="closed" id="hamburger"> 
                <h2>Menu</h2>
                <div className='hamburger closed' id="ham">
                  <span className='top-line line'></span>
                  <span className='middle-line line'></span>
                  <span className='bottom-line line'></span> 
                </div>
                </button>
            </div>
            
        </div>
        <div className='side-menu closed' id="side">
          <div className='top'>
            <div className='car-container'>
              <img className='car' alt="car" src="./images/menu/menu_718.jpeg" />
              <h4 className='car-des'>711</h4>
            </div>
            <div className='car-container'>
              <img className='car' alt="car" src="./images/menu/menu_911.jpeg" />
              <h4 className='car-des'>911</h4>
            </div>
            <div className='car-container'>
              <img className='car' alt="car" src="./images/menu/menu_taycan.jpeg" />
              <h4 className='car-des'>Taycan</h4>
            </div>
            <div className='car-container'>
              <img className='car' alt="car" src="./images/menu/panamera_menu.jpeg" />
              <h4 className='car-des'>Panamera</h4>
            </div>
            <div className='car-container'>
              <img className='car' alt="car" src="./images/menu/macan_menu.jpeg" />
              <h4 className='car-des'>Macan</h4>
            </div>
            <div className='car-container'>
              <img className='car' alt="car" src="./images/menu/cayenne_menu.jpeg" />
              <h4 className='car-des'>Cayenne</h4>
            </div> 
          </div>
          <div className='bottom'>
              <div className='shop-container'>
                  <img className='menu-icon' alt="menu-icon" src="./images/menu_icons/menu_bag.png"></img>
                  <h4 className='menu-label'>Shop</h4>
                  <h4 className='arrow-right'>{'>'}</h4>
              </div>
              <div className='dealer-container'>
                  <img className='menu-icon' alt="menu-icon" src="./images/menu_icons/menu_location.png"></img>
                  <h4 className='menu-label'>Dealer</h4>
              </div>
              <div className='my-porsche-container'>
                  <img className='menu-icon' alt="menu-icon" src="./images/menu_icons/menu_user.png"></img>
                  <h4 className='menu-label'>My Porsche</h4>
                  <h4 className='arrow-right'>{'>'}</h4>
              </div>
              <div className='more-container'>
                  <img className='menu-icon' alt="menu-icon" src="./images/menu_icons/menu_vertical.png"></img>
                  <h4 className='menu-label'>More</h4>
                  <h4 className='arrow-right'>{'>'}</h4>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar



function toggleMenu() {
  let menuButton = document.getElementById("hamburger")
  let menu = document.getElementById("ham")
  let sideMenu = document.getElementById("side")
  
  if(menuButton.classList.contains('closed')){
    menuButton.classList.remove('closed')
    menuButton.classList.add('opened')
  }
  else{
    menuButton.classList.remove('opened')
    menuButton.classList.add('closed')
  }

  if(menu.classList.contains('closed')){
    menu.classList.remove('closed')
    if(!menu.classList.contains('opened')){
      menu.classList.add('opened')
    }
  }
  else{
    menu.classList.remove('opened')
    if(!menu.classList.contains('closed')){
      menu.classList.add('closed')
    }
  }
  if(sideMenu.classList.contains("closed")){
    sideMenu.classList.remove("closed")
  }
  else{
    sideMenu.classList.add("closed")
  }

}