import React from 'react'
import './NavBar.css';
import Logo from '../assets/Logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';

function NavBar(){
    //const [menu,setMenu] = useState("welcome")
    return(
        <div className='NavContainer'>
            <div className='NavItem'>
                <img src={Logo} alt="" />
            </div>
            <div className='NavItem'>
            <ul>
                <li><Link style={{textDecoration:'none',color:'white'}} to="/">Welcome</Link></li>
                <li><Link style={{textDecoration:'none',color:'white'}} to='/drink'>drink</Link></li>
                <li><Link style={{textDecoration:'none',color:'white'}} to="/Pastries">Pastries</Link></li>
            </ul>                
            </div>

            <div className='cart_container'>            
            <Link style={{textDecoration:'none'}} to="/Cart"><img div className='cart' src={cart_icon} alt=""/></Link>
            <div className='nav-cart-count'>0</div>
            <Link style={{textDecoration:'none',color:'white',margin:"20px"}} to="/LoginSignup"><button className='LOGIN'>Login</button></Link>
            </div>
        </div>
        
    );
}
export default NavBar;