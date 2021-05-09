const express = require('express')
const router = express.Router()
const NavBar = require('../../General/NavBar/NavBarDB');
const glleryJ = require('./GalleryJ.json');
const categoriesJ = require('./GalleryCategoriesJ.json');
const socialMediaJson = require('../../Parts/Footer/SocialMedia.json')
const contactInfoJson = require('../../Parts/Footer/ContactInfo.json')

let GalleryJson = () => {
    return glleryJ;
};
let CategoriesJson = () => {
    return categoriesJ;
};

let Content = () => {
    return ({
        "Images" : GalleryJson(),
        "Categories" :CategoriesJson()
    });
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
module.exports.GalleryPageJson = (req, res) => {
    res.json ({
        "Nav" : NavBar.NavBarJson(),
        "Content" : Content(),
        "Footer" : Footer()
    });
}
