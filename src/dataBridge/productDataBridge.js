export const productDataBridge = async () => {
  let productData = [];
  const Airtable = require("airtable");
  const base = new Airtable({ apiKey: "keyEgSc5Vve4snM1C" }).base(
    "appuIJEUhvVlzLJr6"
  );
  const table = base("productList");

  const records = await table.select().firstPage();

  records.forEach((data) => {
    productData.push(data.fields);
  });
  
  return productData;
};
