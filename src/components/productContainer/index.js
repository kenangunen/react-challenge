import React, { useContext, useEffect, useState } from "react";
import { FilterOptionsContext } from "../../contexts/FilterOptionsContext";
import { FilteredDataContext } from "../../contexts/FilteredDataContext";
import { ProductContext } from "../../contexts/ProductContext";
import { getFilteredData } from "../../utils/filterData";
import ProductCard from "../productCard";
import "./index.scss";

function ProductContainer() {
  const products = useContext(ProductContext);
  const { filteredData, setFilteredData } = useContext(FilteredDataContext);
  const { filterOptions } = useContext(FilterOptionsContext);
  const { filterType, filterKey } = filterOptions;



  //initial data is set to filteredData
  useEffect(() => {
    setFilteredData(products); 
  }, [products])

  useEffect(() => {
    const data = getFilteredData(filteredData, filterType, filterKey);
    setFilteredData(data);
  }, [filterKey, filterType]);

  return (
    <div className="product-container">
      {filteredData.map((product) => {
        return <ProductCard product={product} key={product.productId} />;
      })}
    </div>
  );
}

export default ProductContainer;
