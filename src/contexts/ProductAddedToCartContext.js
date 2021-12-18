import { createContext, useState } from "react";

const ProductAddedToCartContext = createContext();

const ProductAddedToCartProvider = ({ children }) => {
  const [addedProduct, setAddedProduct] = useState([]);

  const values = {
    addedProduct,
    setAddedProduct,
  };

  console.log(addedProduct)

  return (
    <ProductAddedToCartContext.Provider value={values}>
      {children}
    </ProductAddedToCartContext.Provider>
  );
};

export { ProductAddedToCartContext, ProductAddedToCartProvider };
