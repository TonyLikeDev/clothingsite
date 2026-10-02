const sale = { name: 'Sample Woman Top', price: 33.55, oldPrice: 34.55, image: '2.jpg', tag: 'Sale' };
const item = (image) => ({ name: 'Sample Woman Top', price: 34.55, image });

const newProducts = [item('1.jpg'), sale, item('3.jpg'), item('3.jpg')];

const topProducts = [
    item('1.jpg'), sale, item('3.jpg'), item('3.jpg'),
    item('1.jpg'), sale, item('3.jpg'), item('3.jpg')
];

module.exports = { newProducts, topProducts };
