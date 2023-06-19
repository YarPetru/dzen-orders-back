const Joi = require('joi');

const orderSchema = Joi.object({
  title: Joi.string().required(),
  date: Joi.string().required(),
  description: Joi.string().required(),
});

module.exports = orderSchema;

