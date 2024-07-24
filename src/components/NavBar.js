import React from 'react'
import './NavBar.css';
import Logo from '../assets/Logo.png'
import cart_icon from '../assets/cart_icon.png'

function NavBar(){
    return(
        <>
        <div className='nav'>
            <div className='NavLogo'>
                <img src={Logo} alt="" />

            </div>

            <ul className='NavMenu'>
                <li>HOME</li>
                <li>MENU</li>
                <li>OUR STUFF</li>
            </ul>

            <div className='navcart'>
            <img src={cart_icon} alt=""/>

                <button>Login</button>
            </div>
        </div>
        </>
    );
}
export default NavBar;