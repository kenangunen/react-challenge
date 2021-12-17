export const getFilteredData = (products, filterType, filterKey) => {
  // let searchDataList = [];
  // let filteredData = [];
  // if(products.length > 1){
  //     products.forEach(product => {
  //         const { brand, name, productId } = product;
  //         const searchText = `${brand},${name}`
  //         searchDataList.push({productId, searchText })
  //     })
  // }

  switch (filterType) {
    case "search":
      if (filterKey.length > 2) {
        const filteredData = products.filter((product) =>
          product.brand.includes(capitalizeFirstLetter(filterKey))
        );
        return filteredData;
      } else {
        return products;
      }

      break;

    default:
      return products;
      break;
  }
};

const capitalizeFirstLetter = (filterKey) => {
  return filterKey.charAt(0).toUpperCase() + filterKey.slice(1);
};
