const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// Route để hiển thị trang chủ
router.get('/', pageController.home);

// Route để hiển thị trang giới thiệu
router.get('/about', pageController.about);

// Route để hiển thị trang liên hệ
router.get('/contact', pageController.contact);

module.exports = router;