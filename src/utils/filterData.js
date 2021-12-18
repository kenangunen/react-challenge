export const getFilteredData = (products, filterType, filterKey) => {
  switch (filterType) {
    case "search":
      if (filterKey.length > 2) {
        const filteredData = products.filter((product) =>
          product.name.includes(capitalizeFirstLetter(filterKey))
        );
        return filteredData;
      } else {
        return products;
      }

    case "colorFilter":
      return products.filter((product) => product.color === filterKey);

    case "brandFilter":
      return products.filter((product) => product.brand === filterKey);
      
      case "sortFilter":
        let sortedList = []
        
        if(filterKey === "lowestPrice"){
          sortedList = products.slice(0).sort((a,b) => {
            return a.price - b.price
          })         
        }else if(filterKey === "highestPrice"){
          sortedList = products.slice(0).sort((a,b) => {
            return b.price - a.price
          }) 
        }          
        return sortedList
    default:
      return products;
      break;
  }
};

const capitalizeFirstLetter = (filterKey) => {
  return filterKey.charAt(0).toUpperCase() + filterKey.slice(1);
};

export const getFieldValue = (fieldValues) => {
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
