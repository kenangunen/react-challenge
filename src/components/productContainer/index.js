import "./index.scss";
import { ProductContext } from "../../contexts/ProductContext";
import React, { useContext } from "react";
import ProductCard from "../productCard";

function ProductContainer() {
  const products = useContext(ProductContext);
  return (
    <div className="product-container">
      {products.map((product) => {
        return <ProductCard product={product} key={product.productId} />;
      })}
    </div>
  );
}

export default ProductContainer;
