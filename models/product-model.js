const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const guaranteeSchema = new Schema({
  start: String,
  end: String,
});

const priceSchema = new Schema({
  value: Number,
  symbol: {
    type: String,
    enum: ['USD', 'UAH'],
    required: true,
  },
  isDefault: {
    type: Number,
    enum: [0, 1],
    required: true,
  },
});

const productSchema = new Schema(
  {
    serialNumber: {
      type: String,
      required: true,
    },
    isNewProduct: {
      type: Number,
      enum: [0, 1],
      required: true,
    },
    isAvailable: {
      type: Number,
      enum: [0, 1],
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    guarantee: {
      type: guaranteeSchema,
      required: true,
    },
    price: {
      type: [priceSchema],
      required: true,
    },
    order: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

productSchema.post('save', handleMongooseError);

const Product = model('product', productSchema);

module.exports = Product;
