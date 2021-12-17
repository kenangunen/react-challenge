import Logo from "../../assets/logo";
import SearchBar from "../searchBar";
import ShoppingCart from "../shoppingCart";
import "./index.scss";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div className="shopping-cart-container">
        <ShoppingCart />
      </div>
    </header>
  );
}

export default Header;
