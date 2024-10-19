// this is common for both drinks and desserts
import React, { useContext } from "react";
import './CSS/menucategory.css'
import { ShopContext } from "../Context/ShopContext";
import Item from "../components/Item";
const ShopCategory = (props) =>{
    const{all_products} = useContext(ShopContext)
    return(
        <div >
            {/* <div className="shopcategory-indexSort">
            <p>
                <span>Showing 1-12</span> out of 36 items
            </p>
            <img src={props.banner} alt=""/> 
                       <div className="shopcategory-sort">
                Sort By <img src={dropdown_icon} alt=""/>
                
            </div>
            </div> */}
            <div className="category-container">
                {all_products.map((item,i)=>{
                    if(props.category===item.category)
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    else{
                        return null
                    }
                })}
            </div>
            <h1 className="shopcategory-loadmore">
                Explore More
            </h1>
        </div>
    )
}
export default ShopCategory