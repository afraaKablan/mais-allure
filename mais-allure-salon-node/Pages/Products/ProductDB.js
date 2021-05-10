const ProductsJson = require('./ProductsJ.json');
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');

let ProductsJ = (req, res) => {
    return ProductsJson;
};

module.exports.ProductsJson = (req, res) => {
    res.json ({
        "Nav" : NavBar.NavBarJson(),
        "Content" : ProductsJ(),
        "Footer" : Footer.FooterJson()
    });
}
