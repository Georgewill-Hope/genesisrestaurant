const { ProductData } = require("@/_data");

export const getProductData = (item) => {
    const data = ProductData.find((product) => product.name === item);
  return data;
};
