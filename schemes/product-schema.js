const Joi = require('joi');

const guaranteeSchema = Joi.object ({
  start: Joi.string(),
  end: Joi.string(),
})

const priceSchema = Joi.object({
  value: Joi.number(),
  symbol: Joi.string().valid('USD', 'UAH'),
  isDefault: Joi.number().valid(0, 1),
});

const productSchema = Joi.object({
  serialNumber: Joi.string().required(),
  isNewProduct: Joi.number().valid(0, 1).required(),
  isAvailable: Joi.number().valid(0, 1).required(),
  photo: Joi.string().required(),
  title: Joi.string().required(),
  type: Joi.string().required(),
  guarantee: guaranteeSchema.required(),
  price: Joi.array().items(priceSchema).required(),
  order: Joi.string().required(),
  date: Joi.string().required()
});

module.exports = productSchema;
