const Order = require('../../models/order-model');

const getAll = async (request, response) => {
  const result = await Order.find({}, '-createdAt -updatedAt');
  response.json(result);
};

module.exports = getAll;
