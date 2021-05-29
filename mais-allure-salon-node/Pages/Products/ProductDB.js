// const ProductsJson = require('./ProductsJ.json');
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');
const DB = require('../../dataBase.js')

let ProductsJ =  () => {
    let DbQuery =   "SELECT prod.id AS productId, prod.prodName, prod.isTreatment, prod.description , "+
                            "img.src AS imgSrc, img.alt AS imgAlt, prod.price"+
                    " FROM `products_tb` AS prod" +
                    " INNER JOIN images_tb AS img"+
                    "    ON img.id = prod.imgId"+
                    " WHERE prod.isTreatment = 0";
    let DbRes =  DB.DbQuery(DbQuery);
    return DbRes; 
    // return ProductsJson;
};

module.exports.ProductsJson = async (req, res) => {
    res.json ({
        "Nav" : await NavBar.NavBarJson(),
        "Content" :  await ProductsJ(),
        "Footer" : await Footer.FooterJson()
    });
}
