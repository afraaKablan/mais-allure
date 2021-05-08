
const express = require('express')
const router = express.Router()
const NavBar = require('../../General/NavBar/NavBarDB');
// const contactUsJ = require('./ContactFormJ.json');

let ContactUsJson = () => {
    return contactUsJ;
};

let Content = () => {
    return ({
        "ContactForm" : ContactUsJson()
    });
};

module.exports.ContactUsPageJson = () => {
    return ({
        "Nav" : NavBar.NavBarJson(),
    });
}
