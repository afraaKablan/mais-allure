const express = require('express')
const router = express.Router()
const NavBar = require('../../General/NavBar/NavBarDB');


module.exports.AboutUsPage = (req, res) => {
    res.json({
        "Nav" : NavBar.NavBarJson()
    });
}
