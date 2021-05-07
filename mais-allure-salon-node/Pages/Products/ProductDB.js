const ProductsJson = require('./ProductsJ.json');
const NavBar = require('../../General/NavBar/NavBarDB');

let ProductsJ = (req, res) => {
    return ProductsJson;
};

module.exports.ProductsJson = (req, res) => {
    res.json ({
        "Nav" : NavBar.NavBarJson(),
        "Content" : ProductsJ()
    });
}
