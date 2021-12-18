import React, { useContext } from "react";
import { ProductAddedToCartContext } from "../../contexts/ProductAddedToCartContext";
import "./index.scss";

function ShoppingCart() {
  const { addedProduct } = useContext(ProductAddedToCartContext);

  return (
    <>
    <div className="button-container">
      <div className="cart-item-count">
        <span>{addedProduct.length}</span>
      </div>
      <button className="app-button">Sepetim</button>
    </div>
    <div>
      {addedProduct.map((product)=>{
       return <div>
         <p>{product.name}</p>
         <img className="product-img" src={product.productPhotoUrl}></img>
       </div>
      })}
    </div>
    </>
  );
}

export default ShoppingCart;
