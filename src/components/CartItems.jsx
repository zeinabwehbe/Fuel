import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "../assets/remove_icon.png";

const CartItems = () => {
    const {all_products,cartItems,removeFromCart} = useContext(ShopContext);
        console.log(cartItems);
    if (!all_products) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((product) => {
                const { id, name, image, new_price } = product;
                const quantity = cartItems[id];

                if (quantity > 0) {
                    const total = new_price * quantity;

                    return (
                        <div key={id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={image} alt={name} className="carticon-product-icon" />
                                <p>{name}</p>
                                <p>{new_price} $ </p>
                                <button className="cartitems-quantity">{quantity}</button>
                                <p>{total} $</p>
                                <img
                                    src={remove_icon}
                                    onClick={() => removeFromCart(id)}
                                    alt="Remove"
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default CartItems;