const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String, required: true },
    id_type: { type: Number },
    description: { type: String, default: '' },
    unit_price: { type: Number, default: 0 },
    promotion_price: { type: Number, default: 0 },
    price: { type: Number, required: true },
    image: { type: String, default: '/image/product/Fruit-Cake.jpg' },
    unit: { type: String, default: 'cái' },
    tag: { type: String, default: '' }
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

// Fallback data if DB offline
const newProducts = [
  { name: "Bánh Crepe Sầu riêng", price: 4.80, tag: "new", image: "/image/product/1430967449-pancake-sau-rieng-6.jpg" },
  { name: "Bánh Crepe Chocolate", price: 6.40, tag: "new", image: "/image/product/crepe-chocolate.jpg" },
  { name: "Bánh Gato Trái cây Việt Quất", price: 10.00, tag: "new", image: "/image/product/544bc48782741.png" },
  { name: "Bánh kem Chocolate Dâu", price: 11.20, tag: "new", image: "/image/product/banh kem sinh nhat.jpg" }
];

const topProducts = [
  { name: "Bánh kem Dâu I", price: 12.80, tag: "hot", image: "/image/product/banhkem-dau.jpg" },
  { name: "Peach Cake", price: 6.00, tag: "hot", image: "/image/product/Peach-Cake_3294.jpg" },
  { name: "Bánh Su Kem", price: 3.20, tag: "hot", image: "/image/product/sukem.jpg" },
  { name: "Apple Cake", price: 9.60, tag: "hot", image: "/image/product/Fruit-Cake_7979.jpg" }
];

Product.newProducts = newProducts;
Product.topProducts = topProducts;

module.exports = Product;
module.exports.Product = Product;
module.exports.newProducts = newProducts;
module.exports.topProducts = topProducts;