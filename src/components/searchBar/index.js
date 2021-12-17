import SearchIcon from "../../assets/search-icon";
import "./index.scss";
import { FilterOptionsContext } from "../../contexts/FilterOptionsContext";
import React, { useContext } from "react";

function SearchBar() {
  const { setFilterOptions } = useContext(FilterOptionsContext);

  const onChange = (e) => {
    setFilterOptions({ filterType: "search", filterKey: e.target.value });
  };

  return (
    <div className="search-bar">
      <div className="search-icon-container">
        <SearchIcon />
      </div>
      <div className="input-container">
        <input
          className="search-input"
          placeholder="25 milyon’dan fazla ürün içerisinde ara"
          type="text"
          onChange={(e) => onChange(e)}
        ></input>
      </div>
    </div>
  );
}

export default SearchBar;
