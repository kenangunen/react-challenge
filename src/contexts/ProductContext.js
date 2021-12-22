import { createContext, useEffect, useState } from "react";
import { productDataBridge } from "../dataBridge/productDataBridge";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [initialData, setInitialData ] = useState([]) 

    //get initial product data from airTable
    useEffect(()=>{
        productDataBridge().then(function (response) {   
          console.log(response)        
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
