import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
// home contains the new elements
function Welcome()
{
    return(
        <div>
        <Hero/>          
        <Popular/>  
        </div>
    );
}
export default Welcome