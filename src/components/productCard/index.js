import React, { useRef, useState, useContext, useEffect } from "react";
import { ProductAddedToCartContext } from "../../contexts/ProductAddedToCartContext";
import { addData } from "../../dataBridge/shoppingCartDataBridge";
import PropTypes from "prop-types";
import "./index.scss";

function ProductCard(props) {
  const { product } = props;
  const [activeBtnContinerClass, setActiveBtnContainerClass] =
    useState("active");
  const [activeBtnClass, setActiveBtnClass] = useState("orange");

  const { addedProduct, setAddedProduct } = useContext(
    ProductAddedToCartContext
  );
  const [buttonText, setButtonText] = useState("Sepete Ekle");
  const btnContainer = useRef();
  const btn = useRef();

  const { brand, color, name, discount, photo, price, productId } = product;
  const productPhotoUrl = photo[0].url;
  const discountedPrice = price - price * discount;

  const addToCard = async (name, productPhotoUrl, productId) => {
    setActiveBtnContainerClass("passive");
    setActiveBtnClass("gray");
    setButtonText("Bu ürünü sepete ekleyemezsiniz");

    const recordId = await addData(productId, name, productPhotoUrl); //add to database

    setAddedProduct(
      [
        {
          fields: { name, url: productPhotoUrl, productId },
          id: recordId,
        },
      ],
      ...addedProduct
    );
  };

  return (
    <div className="product-cart-container">
      <div className="img-wrapper">
        <img className="product-img" src={productPhotoUrl}></img>
      </div>
      <div className="product-info-wrapper">
        <div className="product-name">
          <p>{name}</p>
        </div>
        <div className={`button-container ${activeBtnContinerClass}`}>
          <button
            ref={btn}
            className={`${activeBtnClass} add-to-cart-button `}
            onClick={(e) => addToCard(name, productPhotoUrl, productId)}
          >
            {buttonText}
          </button>
        </div>

        <div className="product-color-brand">
          <p>
            <span>Marka:</span>
            {brand}
          </p>
          <p>
            <span>Renk:</span>
            {color}
          </p>
        </div>
        <div className="product-price">
          <p className="discounted-price">{discountedPrice.toFixed(2)} TL</p>
          <p className="price-discount">
            <span className="price">{price}</span>
            <span className="discount">{discount}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
