const Order = require('../models/order.model');
const { offSetLimit, limit } = require('../public/paginate');

const createOrder = (async (req, res) => {
	const body = req.body;
	if (!body) {
		res.status(400);
		throw new Error('No order items');
	}
	const order = await Order.create(body);
	res.status(201).json({orders: order});
});

const getOrders = (async(req, res) => {
    const page = req.query.page || 1;
    let offset = offSetLimit(page);
	const order = await Order.find({ offset, limit });
	if (!order) {
		res.status(404);
		throw new Error('Order not found.');
	}
	res.json(order);
});


const getOrderById = (async(req, res) => {
	const order = await Order.findById(req.params.id);
	if (!order) {
		res.status(404);
		throw new Error('Order not found.');
	}
	res.json(order);
});

const updateOrder = (async(req, res) => {
	const body = req.body;
	const order = await Order.getOrderById(req.params.id);
	if (!order) {
		res.status(404);
		throw new Error('Order not found.');
	}
	Object.assign(order, body);
  	await order.save();
	// const result = await order.save();
	res.json(order);
});

module.exports = { createOrder, getOrderById, getOrders, updateOrder};
