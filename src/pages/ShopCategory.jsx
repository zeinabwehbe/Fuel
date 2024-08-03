import React, { useContext } from "react";
import './CSS/menucategory.css'
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from "../components/Item";
const ShopCategory = (props) =>{
    const{all_products} = useContext(ShopContext)
    return(
        <div className="shop-category">
            <div className="shopcategory-indexSort">
            <p>
                <span>Showing 1-12</span> out of 36 items
            </p>
            <img src={props.banner} alt=""/> 
                       <div className="shopcategory-sort">
                Sort By <img src={dropdown_icon} alt=""/>
                
            </div>
            </div>
            <div className="shopcategory-products">
                {all_products.map((item,i)=>{
                    if(props.category===item.category)
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    else{
                        return null
                    }
                })}
            </div>
        </div>
    )
}
export default ShopCategory