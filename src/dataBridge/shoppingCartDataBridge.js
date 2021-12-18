const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keyEgSc5Vve4snM1C" }).base(
  "appbgD3XsXuCtCOLH"
);

export const shoppingCartBridge = async () => {
  let cartData = [];

  const table = base("shopping-cart");

  const records = await table.select().firstPage();

  records.forEach((data) => {
    cartData.push({ id: data.id, fields: data.fields });
  });

  return cartData;
};

export const addData = (productId, name, productPhotoUrl) => {
  return new Promise((resolve) => {
    base("shopping-cart").create(
      [
        {
          fields: {
            productId: productId,
            name: name,
            url: productPhotoUrl,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          resolve(record.getId());
        });
      }
    );
  });
};

export const removeData = (recordId) => {
  base("shopping-cart").destroy([recordId], function (err, deletedRecords) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Deleted", deletedRecords.length, "records");
  });
};
