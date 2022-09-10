const express = require('express');

const {
	createOrder,
	getOrders,
	getOrderById,
	updateOrder,
} = require('../../controllers/order.controller');

const router = express.Router();

router.post('/orders', createOrder);

router.get('/orders', getOrders);

router.get('/orders/:id', getOrderById);

router.patch('/orders/:id', updateOrder);

module.exports = router;