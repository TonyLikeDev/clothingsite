const Product = require('../models/sanphamModel');

exports.getHomePage = async (req, res) => {
    try {
        const [newProducts, topProducts] = await Promise.all([
            Product.find({ type: 'new' }).lean(),
            Product.find({ type: 'top' }).lean()
        ]);
        res.render('layout', { newProducts, topProducts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error loading products');
    }
}
