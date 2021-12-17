import SearchIcon from "../../assets/search-icon";
import "./index.scss";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-icon-container">
        <SearchIcon />
      </div>
      <div className="input-container">
        <input className="search-input" placeholder="25 milyon’dan fazla ürün içerisinde ara" type="text">

        </input>
      </div>
    </div>
  );
}

export default SearchBar;
