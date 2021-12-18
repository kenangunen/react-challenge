import { createContext, useState, useEffect } from "react";
import { shoppingCartBridge } from "../dataBridge/shoppingCartDataBridge";

const ProductAddedToCartContext = createContext();

const ProductAddedToCartProvider = ({ children }) => {
  const [addedProduct, setAddedProduct] = useState([]);

  const values = {
    addedProduct,
    setAddedProduct,
  };  

  //get initial shopping cart data
  useEffect(() => {    
    shoppingCartBridge().then(function (response) {
      setAddedProduct(response); 
    });
  },[]);  


  return (
    <ProductAddedToCartContext.Provider value={values}>
      {children}
    </ProductAddedToCartContext.Provider>
  );
};

export { ProductAddedToCartContext, ProductAddedToCartProvider };
