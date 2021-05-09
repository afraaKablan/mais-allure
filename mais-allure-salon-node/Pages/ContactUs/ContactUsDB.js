
const express = require('express')
const router = express.Router()
const NavBar = require('../../General/NavBar/NavBarDB');
const socialMediaJson = require('../../Parts/Footer/SocialMedia.json')
const contactInfoJson = require('../../Parts/Footer/ContactInfo.json')
 
// const contactUsJ = require('./ContactFormJ.json');

// let ContactUsJson = () => {
//     return contactUsJ;
// };

// let Content = () => {
//     return ({
//         "ContactForm" : ContactUsJson()
//     });
// };
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

module.exports.ContactUsPageJson = () => {
    return ({
        "Nav" : NavBar.NavBarJson(),
        "Footer" : Footer()
    });
}
