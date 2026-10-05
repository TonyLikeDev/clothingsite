const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const sanphamController = require('../controllers/sanphamController');

// Route để hiển thị trang chủ
router.get('/', sanphamController.getHomePage);

// Route để hiển thị trang giới thiệu
router.get('/about', pageController.about);

// Route để hiển thị trang liên hệ
router.get('/contact', pageController.contact);

module.exports = router;