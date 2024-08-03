import React from "react";
import './NewItems.css'
import new_items from '../assets/newItems.js'
import Item from "./Item.jsx";

const NewItems = () =>{
    return (
        <div className="new-items">
            <h1>New Items</h1>
            <hr/>
            <div className="items">
                {new_items.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}

            </div>

        </div>
    )
}
export default NewItems;