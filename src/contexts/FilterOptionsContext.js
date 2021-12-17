import { createContext, useState } from "react";

const FilterOptionsContext = createContext();

const FilterOptionsProvider = ({ children }) => {
  const [filterOptions, setFilterOptions] = useState({
    filterType: null,
    filterKey: null,
  });

  const values = {
    filterOptions,
    setFilterOptions,
  };

  return (
    <FilterOptionsContext.Provider value={values}>
      {children}
    </FilterOptionsContext.Provider>
  );
};

export { FilterOptionsContext, FilterOptionsProvider };
