
const express = require('express')
const router = express.Router()
const NavBar = require('../../../Parts/NavBar/NavBarDB');
const Footer = require('../../../Parts/Footer/FooterDB');

module.exports.SignInJson = (req, res) => {
    return ({
        "Nav" : NavBar.NavBarJson(),
        "Footer" : Footer.FooterJson()
    });
}
