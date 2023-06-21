const Product = require('../../models/product-model');

const { HttpError } = require('../../helpers');

const deleteProduct = async (request, response) => {
  const { id } = request.params;
  const result = await Product.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  response.json({
    message: 'Delete success',
  });
};

module.exports = deleteProduct;
