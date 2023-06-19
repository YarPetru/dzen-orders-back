const Order = require('../../models/order-model');

const createOrder = async (request, response) => {
  const result = await Order.create(request.body);
  response.status(201).json(result);
};

module.exports = createOrder;
