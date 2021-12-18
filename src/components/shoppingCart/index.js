import React, { useContext, useRef, useState } from "react";
import { ProductAddedToCartContext } from "../../contexts/ProductAddedToCartContext";
import { removeData } from "../../dataBridge/shoppingCartDataBridge";
import "./index.scss";

function ShoppingCart() {
  const [cartContainerClass, setCartContainer] = useState("invisible");
  const [buttonClass, setButtonClass] = useState();

  const { addedProduct, setAddedProduct } = useContext(
    ProductAddedToCartContext
  );

  const setClassNames = () => {
    setCartContainer(
      cartContainerClass === "visible" ? "invisible" : "visible"
    );
    setButtonClass(
      buttonClass === "borderless-button" ? null : "borderless-button"
    );
  };

  const removeProduct = (productId, recordId) => {
    removeData(recordId);

    const itemList = [...addedProduct];

    const index = itemList.find((item) => item.productId === productId);
    itemList.splice(index, 1);
    setAddedProduct(itemList);
  };

  return (
    <>
      <div className="button-container">
        <div className="cart-item-count">
          <span>{addedProduct.length}</span>
        </div>
        <button
          className={`app-button ${buttonClass}`}
          onClick={() => setClassNames()}
        >
          Sepetim
        </button>
      </div>
      <div>
        <div className={`cart-container ${cartContainerClass}`}>
          {addedProduct.map((product, index) => {
            return (
              <div key={index} className="added-product">
                <div className="img-container">
                  <img src={product.url}></img>
                </div>

                <div className="name-button-container">
                  <p>{product.name}</p>
                  <div className="button-container">
                    <button
                      onClick={() =>
                        removeProduct(product.id, product.recordId)
                      }
                    >
                      Kaldır
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
