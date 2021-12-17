import "./index.scss";
import { ProductContext } from "../../contexts/ProductContext";
import { FilterOptionsContext } from "../../contexts/FilterOptionsContext";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../productCard";
import { getFilteredData } from "../../utils/filterData";

function ProductContainer() {
  const products = useContext(ProductContext);
  const [filteredProductData, setFilteredProductData] = useState([]);
  const { filterOptions } = useContext(FilterOptionsContext);
  const { filterType, filterKey } = filterOptions;

  useEffect(() => {
    const data = getFilteredData(products, filterType, filterKey);
    setFilteredProductData(data);
  }, [filterKey]);

  const getData = () => {
    if (filteredProductData.length > 0) {
      return filteredProductData;
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
