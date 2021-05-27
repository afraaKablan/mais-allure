const express = require('express')
const router = express.Router()
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');
const CardsJ = require('./Content/CardsJ.json')
const CarouselJ = require('./Content/CarouselJ.json')
// const servicesJ = require('./Content/SalonServices.json')
const modalJ = require('./Content/Modal.json')
const DB = require('../../dataBase.js')

let CardsJson = () => {
    return CardsJ;
};

let CarouselJson = () => {
    return CarouselJ;
};

let ServiceslJson = () => {
    let DbQuery = "SELECT ss.classItem,ss.classImg,ss.link,ss.classTitle,ss.title, it.id,it.alt,it.src"+
                  " FROM salonservices_tb AS ss"+
                  " INNER JOIN images_tb AS it "+
                  " ON ss.img_id = it.id;";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return servicesJ;
};

let ModalJson = () => {
    return modalJ;
};

let Content = async () => {
    return ({
        "Cards" : CardsJson(),
        "Carousel" : CarouselJson(),
        "Services" : await ServiceslJson(),
        "Modal" : ModalJson()
    });
};

module.exports.HomePageJson = async () => {
    return ({
        "Nav" : await NavBar.NavBarJson(),
        "Content" :  await Content(),
        "Footer" : await Footer.FooterJson()
    });
}
