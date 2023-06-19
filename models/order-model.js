const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');


const orderSchema = new Schema(
  {
    title: String,
    date: String,
    description: String,
  }
);

orderSchema.post('save', handleMongooseError);

const Order = model('order', orderSchema);

module.exports = Order;
