import React from 'react'
import './navbar.css'
import LogoUrl from '../../util/koinxLogo.png'
export const Navbar = () => {
  return (
    <div id='navbar-layout'>
        <div id='logo-nav'>
         <img src={LogoUrl} alt="" />
        </div>
        <div id='nav-elements'>
            <ul id='nav-items'>
             <li> <a href="#">Crypto Taxes</a></li>
             <li> <a href="#">Free Tools</a></li>
             <li><a href="#">Resource Center</a></li>
             <li>
                
                 <button id='element-id-button-nav'>Get Started</button>
                
                
                
                </li>



            </ul>
          


        </div>


    </div>
  )
}
