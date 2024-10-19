import React, { useContext } from "react";
import './ProductDisplay.css'
import star_colored from "../assets/star_colored.png"
import star_dull from "../assets/star_dull.png"
import { ShopContext } from "../Context/ShopContext";


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/> 
                    <img src={product.image} alt=""/>

                </div>
                <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt=""/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                <img src={star_colored} alt=""/>
                <img src={star_colored} alt=""/>
                <img src={star_colored} alt=""/>
                <img src={star_colored} alt=""/>

                <img src={star_dull} alt=""/>

                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">{product.old_price} $</div>
                    <div className="productdisplay-right-prices-new">{product.new_price} $</div>
                </div>
                <div className="productdisplay-right-description">
                    A coffee drink is a beverage made from brewed coffee beans, 
                    typically served hot or cold, with various additions like milk, cream, sugar, or flavored syrups. There are many types of coffee drinks, ranging from simple black coffee to complex espresso-based beverages like lattes, cappuccinos, and macchiatos. Each type of coffee drink can vary in strength, flavor, and preparation method,
                    making it a versatile and popular choice worldwide.
                </div>
                <div className="productdisplay-right-size">
                    <h1 id="size">Size</h1>
                    <div className="productdisplay-right-size">
                        <div className="size">Small</div>
                        <div className="size"> Medium</div>
                        <div className="size">Large</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART!</button>
            </div>
        </div>
    )
}
export default ProductDisplay;