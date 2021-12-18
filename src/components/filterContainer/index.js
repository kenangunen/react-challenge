import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { FilteredDataContext } from "../../contexts/FilteredDataContext";
import { getFieldValue, getFilteredData } from "../../utils/filterData";
import "./index.scss";

function FilterContainer() {
  const products = useContext(ProductContext);
  const { setFilteredData } = useContext(FilteredDataContext);

  let brandList = [];
  let colorList = [];
  const sortByOptions = [
    { text: "En Düşük Fiyat", key: "lowestPrice" },
    { text: "En Yüksek Fiyat", key: "highestPrice" },
    { text: "En Yeniler (A>Z)", key: "newests" },
    { text: "En Yeniler (Z>A)", key: "oldest" },
  ];

  products.map((product) => {
    const { brand, color } = product;
    brandList.push(brand);
    colorList.push(color);
  });

  const uniqueList = getFieldValue({ brandList, colorList });
  const { uniqueBrandsWithCount, uniqueColorsWithCount } = uniqueList;

  const setFilter = (e, filterType, filterKey) => {
    const activeOptiomElement = [...document.getElementsByClassName("active")];
    activeOptiomElement[0]?.classList.remove("active");

    const selectedOptionElement = e.target;
    selectedOptionElement.classList.add("active");

    const data = getFilteredData(products, filterType, filterKey);   
    setFilteredData(data);
  };

  return (
    <>
      <div className="option-container">
        <h3 className="filter-header">Renk</h3>
        <div className="options">
          {uniqueColorsWithCount.map((color, index) => {
            return (
              <li
                key={index}
                onClick={(e) => setFilter(e, "colorFilter", color.color)}
              >
                {color.color} ({color.count})
              </li>
            );
          })}
        </div>
      </div>
      <div className="option-container">
        <h3 className="filter-header">Sıralama</h3>
        <div className="options">
          {sortByOptions.map((option, index) => {
            return (
              <li
                key={index}
                onClick={(e) => setFilter(e, "sortFilter", option.key)}
              >
                {option.text}
              </li>
            );
          })}
        </div>
      </div>
      <div className="option-container">
        <h3 className="filter-header">Marka</h3>
        <div className="options">
          {uniqueBrandsWithCount.map((brand, index) => {
            return (
              <li
                key={index}
                onClick={(e) => setFilter(e, "brandFilter", brand.brand)}
              >
                {brand.brand} ({brand.count})
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FilterContainer;
