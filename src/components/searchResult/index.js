import SearchIcon from "../../assets/search-icon";
import SortSelect from "../sortSelect";
import "./index.scss";

function SearchResult() {
  return (
    <>
      <div className="search-wrapper">
        <h1 className="search-header">iPhone iOS cep telefonu</h1>
        <h2 className="search-detail">
          <span className="label">Aranan Kelime:</span>
          <span className="search-word">iphone 11</span>
        </h2>
      </div>
      <div className="sort-select-container">
        <SortSelect />
      </div>
    </>
  );
}

export default SearchResult;
