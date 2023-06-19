const express = require('express');

const controller = require('../../controllers/products');
const productSchema = require('../../schemes/product-schema');
const { validateBody, isValidId } = require('../../middlewares');

const router = express.Router();

router.get('/', controller.getAll);

router.get('/:id', isValidId, controller.getById);

router.post('/', validateBody(productSchema), controller.createProduct);

module.exports = router;
