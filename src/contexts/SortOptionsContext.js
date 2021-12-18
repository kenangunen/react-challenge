import { createContext, useState } from "react";

const SortOptionsContext = createContext();

const SortOptionsProvider = ({ children }) => {
  const [sortOptions, setSortOptions] = useState([
    { text: "En Düşük Fiyat", key: "lowestPrice", active: false },
    { text: "En Yüksek Fiyat", key: "highestPrice", active: false},
    { text: "En Yeniler (A>Z)", key: "newests", active: false},
    { text: "En Yeniler (Z>A)", key: "oldest", active: false},
  ]);
  const value = {
    sortOptions,
    setSortOptions,
  };

  return (
    <SortOptionsContext.Provider value={value}>
      {children}
    </SortOptionsContext.Provider>
  );
};

export { SortOptionsContext, SortOptionsProvider };
