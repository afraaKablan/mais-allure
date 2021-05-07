const express = require('express')
const router = express.Router()
const NavBar = require('../../General/NavBar/NavBarDB');


module.exports.AboutUsJson = (req, res) => {
    return ({
        "Nav" : NavBar.NavBarJson()
    });
}
