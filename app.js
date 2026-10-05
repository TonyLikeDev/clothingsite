const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const pageRoutes = require('./routes/pageRoutes');
const Product = require('./models/sanphamModel');

const app = express();
const PORT = process.env.PORT || 5174;

// Kích hoạt public
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sử dụng routes
app.use('/', pageRoutes);

// Kết nối MongoDB trước, rồi mới mở server
async function start() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 3000 });
        console.log('✅ MongoDB connected');

        // DB trống thì nạp dữ liệu mẫu
        if (await Product.countDocuments() === 0) {
            await Product.insertMany(require('./models/sanphamData'));
            console.log('Đã nạp dữ liệu mẫu vào MongoDB');
        }

        app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));
    } catch (err) {
        console.error('❌ Không kết nối được MongoDB:', err.message);
        process.exit(1);
    }
}

start();
