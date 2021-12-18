import { createContext, useState } from "react";

const FilteredDataContext = createContext();

const FilteredDataProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState([]);

  const values = {
    filteredData,
    setFilteredData,
  };

  return (
    <FilteredDataContext.Provider value={values}>
      {children}
    </FilteredDataContext.Provider>
  );
};

export { FilteredDataContext, FilteredDataProvider };
