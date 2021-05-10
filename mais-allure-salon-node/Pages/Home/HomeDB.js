const express = require('express')
const router = express.Router()
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');
const CardsJ = require('./Content/CardsJ.json')
const CarouselJ = require('./Content/CarouselJ.json')
const servicesJ = require('./Content/SalonServices.json')
const modalJ = require('./Content/Modal.json')

let CardsJson = () => {
    return CardsJ;
};

let CarouselJson = () => {
    return CarouselJ;
};

let ServiceslJson = () => {
    return servicesJ;
};

let ModalJson = () => {
    return modalJ;
};

let Content = () => {
    return ({
        "Cards" : CardsJson(),
        "Carousel" : CarouselJson(),
        "Services" : ServiceslJson(),
        "Modal" : ModalJson()
    });
};

module.exports.HomePageJson = () => {
    return ({
        "Nav" : NavBar.NavBarJson(),
        "Content" : Content(),
        "Footer" : Footer.FooterJson()
    });
}
