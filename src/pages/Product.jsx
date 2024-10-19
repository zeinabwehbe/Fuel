import React from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum";
import all_product from "../assets/all_products"
import ProductDisplay from "../components/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox";
//


//hon hene sta3malo context


//
const Product = () => {
    
    // Using useParams to extract the productId from the URL parameters
    const { productId } = useParams(); // Extract the productId from URL parameters

    // Convert productId to a number (if necessary)
    const id = Number(productId);
    
    // Find the product in your data array, saved as an object
    const product = all_product.find(item => item.id === id);

  return (
    <div className="">
      {/* Displaying the productId just for testing purposes */}
      
      {/* Passing the found product to the Breadcrum component */}
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
    </div>

  );
};
export default Product