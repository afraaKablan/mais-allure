const express = require('express')
const router = express.Router()
const NavBar = require('../../General/NavBar/NavBarDB');
const glleryJ = require('./GalleryJ.json');

let GalleryJson = () => {
    return glleryJ;
};

let Content = () => {
    return ({
        "Images" : GalleryJson()
    });
};

module.exports.GalleryPageJson = (req, res) => {
    res.json ({
        "Nav" : NavBar.NavBarJson(),
        "Content" : Content()
    });
}
