import React, { createContext} from "react";
import all_products from '../assets/all_products';
import { useState } from "react";
export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = {};
    all_products.forEach((product) => {
        cart[product.id] = 0; // Use the product id instead of index
    });
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setcartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        return cartItems;
    };

    const removeFromCart = (itemId) => {
        setcartItems((prev) => {
            const newCount = prev[itemId] - 1;
            return { ...prev, [itemId]: newCount < 0 ? 0 : newCount };
        });
    };

    const contextValue = {
        all_products,
        cartItems,
        addToCart,
        removeFromCart,
    };
    console.log(contextValue)

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;

/////////////////////////

// const CartItems = () => {
//     const {all_products,
//         cartItems,
//         addToCart,
//         removeFromCart} = useContext(ShopContext);