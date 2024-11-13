const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');


const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Kết nối thành công với MongoDB'))
    .catch((error) => console.error('Lỗi kết nối MongoDB:', error));

// Định nghĩa router
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});