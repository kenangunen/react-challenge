import { createContext, useEffect, useState } from "react";
import { productDataBridge } from "../dataBridge/productDataBridge";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [initialData, setInitialData ] = useState([]) 

    useEffect(()=>{
        productDataBridge().then(function (response) {           
            setInitialData(response)           
        });    
    },[]);

   
  return (
    <ProductContext.Provider value={initialData}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
