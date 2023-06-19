const Product = require('../../models/product-model');

const getAll = async (request, response) => {
  const result = await Product.find({}, '-createdAt -updatedAt');
  response.json(result);
};

module.exports = getAll;
