const ProductsJson = require('./ProductsJ.json');

module.exports.proJson = (req, res) => {
    res.json(ProductsJson);
    console.log(ProductsJson);
};