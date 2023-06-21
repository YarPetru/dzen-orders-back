const Order = require('../../models/order-model');

const { HttpError } = require('../../helpers');

const deleteOrder = async (request, response) => {
  const { id } = request.params;
  const result = await Order.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  response.json({
    message: 'Delete success',
  });
};

module.exports = deleteOrder;
