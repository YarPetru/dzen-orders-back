const getAll = require('./get-all-products');
const getById = require('./get-product-by-id');
const createProduct = require('./create-product');

const { ctrlWrapper } = require('../../helpers');

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  createProduct: ctrlWrapper(createProduct),
};
