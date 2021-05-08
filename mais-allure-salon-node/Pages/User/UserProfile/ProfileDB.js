
const express = require('express')
const router = express.Router()
const NavBar = require('../../../General/NavBar/NavBarDB');

// let ContactUsJson = () => {
//     return contactUsJ;
// };

// let Content = () => {
//     return ({
//         "ContactForm" : ContactUsJson()
//     });
// };

module.exports.ProfilePageJson = (req, res) => {
    return ({
        "Nav" : NavBar.NavBarJson(),
    });
}
