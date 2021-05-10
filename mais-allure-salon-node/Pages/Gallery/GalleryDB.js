const express = require('express')
const router = express.Router()
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');
const nailsJ = require('./GalleryJ.json');
const fashionJ = require('./FashionJ.json');
const categoriesJ = require('./GalleryCategoriesJ.json');

let NailsGalleryJson = () => {
    return nailsJ;
};

let FashionGalleryJson = () => {
    return fashionJ;
}; 

let CategoriesJson = () => {
    return categoriesJ;
};

module.exports.GalleryPageJson = (category) => {
    if (!category){
        return ({
            "Nav" : NavBar.NavBarJson(),
            "Categories" :CategoriesJson(),
            "Footer" : Footer.FooterJson()
        });
    }
    else if (category == 'nails')
        return ({
            "Nav" : NavBar.NavBarJson(),
            "Images" :NailsGalleryJson(),
            "Footer" : Footer.FooterJson()
        })
    else if(category == 'fashion')
        return({
            "Nav" : NavBar.NavBarJson(),
            "Images" :FashionGalleryJson(),
            "Footer" : Footer.FooterJson()
        })
    
}
