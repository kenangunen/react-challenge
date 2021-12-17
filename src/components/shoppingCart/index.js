import Logo from "../../assets/logo";
import "./index.scss";

function ShoppingCart() {
  return (
    <div className="button-container">
      <div className="cart-item-count">
        <span>4</span>
      </div>
      <button className="cart-button">Sepetim</button>
    </div>
  );
}

export default ShoppingCart;
