import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">

        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
        </div>

            <div className="descriptionbox-description">
            <p className="productdisplay-right-category"><span>Category:</span> Iced, Hot</p>

            <p>
            An e-commerce platform for a coffee shop helps the business sell coffee products,
            accessories, and related merchandise online. It enables the shop to reach a wider
            audience beyond its physical location by offering an online storefront where customers can browse,
            select, and purchase items. 
            </p>
            <p>
                e commerce display the products allowing you to order your favorite products with different dizes.
            </p>
            </div>
        </div>
    )
}
export default DescriptionBox;