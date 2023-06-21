const express = require('express');

const controller = require('../../controllers/orders');
const orderSchema = require('../../schemes/order-schema');
const { validateBody, isValidId } = require('../../middlewares');

const router = express.Router();

router.get('/', controller.getAll);

router.post('/', validateBody(orderSchema), controller.createOrder);

router.delete('/:id', isValidId, controller.deleteOrder);

module.exports = router;
