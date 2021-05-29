
const express = require('express')
const router = express.Router()
const NavBar = require('../../../Parts/NavBar/NavBarDB');
const Footer = require('../../../Parts/Footer/FooterDB');
const productsJ = require('../../../Pages/Products/ProductsJ.json')
const usersJ = require('../RegisteredUsers.json')


let UsersJson = () => {
    return usersJ;
};

let ProductsJson = () => {
    return productsJ;
};

let  Content= () => {
    return ({
        "Users": UsersJson(),
        "Products": ProductsJson()
    });
};

module.exports.ProfilePageJson = async (req, res) => {
    return ({
        "Nav":await NavBar.NavBarJson(),
        "Content": Content(),
        "Footer" : await Footer.FooterJson()
    });
}
