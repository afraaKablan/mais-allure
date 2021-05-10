const express = require('express')
const router = express.Router()
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');
const ContentJ = require('./Content/lineInfo.json');

let ContentJson = (req, res) => {
    return ContentJ;
};

module.exports.AboutUsJson = (req, res) => {
    return ({
        "Nav" : NavBar.NavBarJson(),
        "Content" : ContentJson(),
        "Footer" : Footer.FooterJson()
    });
}
