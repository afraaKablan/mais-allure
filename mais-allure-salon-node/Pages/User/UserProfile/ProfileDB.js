
const express = require('express')
const router = express.Router()
const NavBar = require('../../../General/NavBar/NavBarDB');
const productsJ = require('../../../Pages/Products/ProductsJ.json')
const usersJ = require('../RegisteredUsers.json')
const socialMediaJson = require('../../../Parts/Footer/SocialMedia.json')
const contactInfoJson = require('../../../Parts/Footer/ContactInfo.json')
 

let UsersJson = () => {
    return usersJ;
};

let ProductsJson = () => {
    return productsJ;
};
let SocialMediaJson = () => {
    return socialMediaJson;
};

let ContactInfoJson = () => {
    return contactInfoJson;
};
let Footer = () => {
    return ({
        "Social" : SocialMediaJson(),
        "ContactInfo" : ContactInfoJson()
    });
};
let  Content= () => {
    return ({
        "Users": UsersJson(),
        "Products": ProductsJson()
    });
};

module.exports.ProfilePageJson = (req, res) => {
    return ({
        "Nav": NavBar.NavBarJson(),
        "Content": Content(),
        "Footer" : Footer()
    });
}
