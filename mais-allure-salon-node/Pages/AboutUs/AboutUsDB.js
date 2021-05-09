const express = require('express')
const router = express.Router()
const NavBar = require('../../General/NavBar/NavBarDB');
const ContentJ = require('./Content/lineInfo.json');
const socialMediaJson = require('../../Parts/Footer/SocialMedia.json')
const contactInfoJson = require('../../Parts/Footer/ContactInfo.json')
 
let ContentJson = (req, res) => {
    return ContentJ;
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
module.exports.AboutUsJson = (req, res) => {
    return ({
        "Nav" : NavBar.NavBarJson(),
        "Content" : ContentJson(),
        "Footer" : Footer()
    });
}
