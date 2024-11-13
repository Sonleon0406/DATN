const express = require('express');
const Order = require('../models/order');
const router = express.Router();

// Tạo đơn hàng mới
router.post('/', async(req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Lấy tất cả đơn hàng
router.get('/', async(req, res) => {
    try {
        const orders = await Order.find().populate('userId').populate('productIds');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Lấy đơn hàng theo ID
router.get('/:id', async(req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('userId').populate('productIds');
        if (!order) return res.status(404).json({ message: 'Đơn hàng không tìm thấy' });
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Cập nhật đơn hàng theo ID
router.put('/:id', async(req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) return res.status(404).json({ message: 'Đơn hàng không tìm thấy' });
        res.json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Xóa đơn hàng theo ID
router.delete('/:id', async(req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: 'Đơn hàng không tìm thấy' });
        res.json({ message: 'Đơn hàng đã bị xóa' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;