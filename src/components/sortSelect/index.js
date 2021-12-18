import React, { useContext, useEffect, useRef } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { SortOptionsContext } from "../../contexts/SortOptionsContext";
import { FilteredDataContext } from "../../contexts/FilteredDataContext";
import { getFilteredData } from "../../utils/filterData";
import "./index.scss";

function SortSelect() {
  const { sortOptions, setSortOptions } = useContext(SortOptionsContext);
  const { setFilteredData } = useContext(FilteredDataContext);
  const products = useContext(ProductContext);
  const selectRef = useRef();

  //works when selecting from the select box
  const onSelect = (e) => {
    const filterType = "sortFilter";
    const filterKey = e.target.value;
    const items = [...sortOptions];

    //get filteredData base on filterType and filterKey
    const data = getFilteredData(products, filterType, filterKey);
    setFilteredData(data);

    //deactivate all selections.
    const activedItemIndex = items.findIndex((item) => item.active);
    if (activedItemIndex > -1) {
      items[activedItemIndex].active = false;
    }    

    //set selected sort option for filter list.
    const index = items.findIndex((option) => option.key === filterKey);
    items[index].active = true;
    setSortOptions(items);

  };

  //works when selected from the sort options on the left
  useEffect(()=>{
    const option = sortOptions.filter(option => option.active);  
    if(option.length > 0){
      selectRef.current.value = option[0].key
    }
   
  },[sortOptions])

  return (
    <div className="select-container">
      <select ref={selectRef} className="app-button" onChange={(e) => onSelect(e)}>
        <option value="0">Sırala</option>
        {sortOptions.map((option, index) => (
          <option value={option.key} key={index}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortSelect;
