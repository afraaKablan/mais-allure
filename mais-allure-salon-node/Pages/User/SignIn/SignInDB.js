
const express = require('express')
const router = express.Router()
const NavBar = require('../../../Parts/NavBar/NavBarDB');
const Footer = require('../../../Parts/Footer/FooterDB');

module.exports.SignInJson = async (req, res) => {
    return ({
        "Nav" : await NavBar.NavBarJson(),
        "Footer" : await Footer.FooterJson()
    });
}

