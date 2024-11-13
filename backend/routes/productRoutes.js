const express = require('express');
const Product = require('../models/product');

const router = express.Router();

// Tạo sản phẩm mới
router.post('/', async(req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Lấy tất cả sản phẩm
router.get('/', async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Lấy sản phẩm theo ID
router.get('/:id', async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Sản phẩm không tìm thấy' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Cập nhật sản phẩm theo ID
router.put('/:id', async(req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Sản phẩm không tìm thấy' });
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Xóa sản phẩm theo ID
router.delete('/:id', async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Sản phẩm không tìm thấy' });
        res.json({ message: 'Sản phẩm đã bị xóa' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;