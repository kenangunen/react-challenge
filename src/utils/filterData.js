//This function is used for all filtering operations in the application.
export const getFilteredData = (products, filterType, filterKey) => {
  switch (filterType) {
    //it works when you type something in the search bar
    case "search":
      if (filterKey.length > 2) {
        const filteredData = products.filter((product) =>
          product.name.includes(capitalizeFirstLetter(filterKey))
        );
        return filteredData;
      } else {
        return products;
      }

    //filters by color
    case "colorFilter":
      return products.filter((product) => product.color === filterKey);

    //filters by brand
    case "brandFilter":
      return products.filter((product) => product.brand === filterKey);

    case "sortFilter":
      let sortedList = [];

      //Sort by cheapest to most expensive
      if (filterKey === "lowestPrice") {
        sortedList = products.slice(0).sort((a, b) => {
          return a.price - b.price;
        });
      } else if (filterKey === "highestPrice") {
        //Sort by expensive to most cheapest
        sortedList = products.slice(0).sort((a, b) => {
          return b.price - a.price;
        });
      }
      return sortedList;
    default:
      return products;
  }
};

const capitalizeFirstLetter = (filterKey) => {
  return filterKey.charAt(0).toUpperCase() + filterKey.slice(1);
};

//Returns the uniq values ​​of the brandList and colorList.
export const getFieldUniqueValue = (fieldValues) => {
  const { brandList, colorList } = fieldValues;

  let uniqueBrandsWithCount = [];
  let uniqueColorsWithCount = [];

  const uniqueBrands = [...new Set(brandList)];
  const uniqueColors = [...new Set(colorList)];

  uniqueBrands.map((uniqueBrand) => {
    const count = brandList.filter((brand) => brand === uniqueBrand);
    uniqueBrandsWithCount.push({ brand: uniqueBrand, count: count.length });
  });

  uniqueColors.map((uniqueColor) => {
    const count = colorList.filter((color) => color === uniqueColor);
    uniqueColorsWithCount.push({ color: uniqueColor, count: count.length });
  });

  return { uniqueBrandsWithCount, uniqueColorsWithCount };
};
