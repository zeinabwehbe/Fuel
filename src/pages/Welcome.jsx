import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import NewItems from "../components/NewItems";
import Subscribe from "../components/Subscribe";
import './CSS/welcome.css'
// home contains the new elements
function Welcome()
{
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column', // Change to 'row' for horizontal alignment
        justifyContent: 'center',
        alignItems: 'center',
        
      };

    return(
        <div style={containerStyle} className="wel-background">
        <Hero/>          
        <Popular/>  
        <NewItems/>
        <Subscribe/>
        </div>
    );
}
export default Welcome