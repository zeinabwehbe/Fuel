import React from "react";
import './Hero.css'
import right_photo from '../assets/right_photo.png';
import { Link } from "react-router-dom";
function Hero(){
    return(
        <div className="hero">
                    <div className="hero-left">
                        <h2>Have a great Coffee<br/>Today and Everyday!</h2>
                         <div>
                            <div className="desc">
                                <p>"We are here to energize you, as we believe in the power of a great cup of coffee to fuel your day and boost your productivity. Our cozy and inviting space is designed for coffee lovers,
                                     busy professionals, and anyone looking for a comfortable spot to relax or work.</p>
                            </div>                    
                        </div> 
                        <div>
                        <Link to='/drink' style={{textDecoration:'none'}}><button className="newItems">fill your cup</button></Link>

                        </div>

                    </div>
                    <div className="hero-right">
                        <div>                            
                        <img src={right_photo} alt="design" />
                        </div>
                    </div>
        </div>
    );
}
export default Hero