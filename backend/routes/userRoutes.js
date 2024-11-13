const express = require('express');
const User = require('../models/user');
const router = express.Router();

// tao user new\
router.post('/', async(req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// lay all user
router.get('/', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// lay user theo id
router.get('/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Người dùng không tìm thấy' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// capp nhaat useer theo id
router.put('/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'Người dùng không tìm thấy' });
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// xoa user theo id
router.delete('/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'Người dùng không tìm thấy' });
        res.json({ message: 'Người dùng bị xóa' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;