const Product = require('../../models/product-model');

const createProduct = async (request, response) => {
  const result = await Product.create(request.body);
  response.status(201).json(result);
};

module.exports = createProduct;
