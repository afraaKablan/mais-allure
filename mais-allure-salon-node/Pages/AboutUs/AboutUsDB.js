const express = require('express')
const router = express.Router()
const NavBar = require('../../General/NavBar/NavBarDB');
const ContentJ = require('./Content/lineInfo.json');

let ContentJson = (req, res) => {
    return ContentJ;
};

module.exports.AboutUsJson = (req, res) => {
    return ({
        "Nav" : NavBar.NavBarJson(),
        "Content" : ContentJson()
    });
}
