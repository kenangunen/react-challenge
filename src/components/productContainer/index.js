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

  useEffect(() => {
    const data = getFilteredData(products, filterType, filterKey);
    setFilteredData(data);
  }, [filterKey]);

  const getData = () => {
    if (filteredData.length > 0) {
      return filteredData;
    } else {
      return products;
    }
  };

  return (
    <div className="product-container">
      {getData().map((product) => {
        return <ProductCard product={product} key={product.productId} />;
      })}
    </div>
  );
}

export default ProductContainer;
