const express = require('express')
const router = express.Router()
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');
// const CardsJ = require('./Content/CardsJ.json')
const CarouselJ = require('./Content/CarouselJ.json')
// const servicesJ = require('./Content/SalonServices.json')
const modalJ = require('./Content/Modal.json')
const DB = require('../../dataBase.js')

let CardsJson = () => {
    let DbQuery =   "SELECT txt.id, txt.title, txt.class, txt.titleClass, txt.contentClass, txt.toggle ,txt.target ,txt.more ,txt.imgClass ,txt.imgId ,txt.hclass ,txt.content , pg.page , img.src AS imgSrc, img.alt, txt.description "+
                    " FROM `text_tb` AS txt"+
                    " LEFT JOIN images_tb AS img"+
                    "    ON img.id=txt.img_id"+
                    " INNER JOIN page_tb AS pg"+
                    "    ON pg.id = txt.page_id"+
                    " WHERE txt.description like 'card' "+
                    " AND pg.page like 'home'";

    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    
    // return CardsJ;
};

let CarouselJson = () => {
    let DbQuery =   " SELECT cars.id,cars.carouselindex , cars.indicClass, cars.itemClass, cars.captionTitle, cars.captionContent, pg.page, img.src, img.alt AS imgAlt"+
                    " FROM `carousel_tb` AS cars" +
                    " INNER JOIN images_tb AS img"+
                    "    ON img.id = cars.img_id"+
                    " INNER JOIN page_tb AS pg"+
                    "    ON pg.id = cars.page_id"+
                    " WHERE pg.page like 'home';";
let DbRes = DB.DbQuery(DbQuery);
console.log("Query : "+ DbRes.toString());
return DbRes;
    // return CarouselJ;
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
    let DbQuery =   "SELECT txt.id, txt.title, txt.titleClass AS ctitle,"+
                        " txt.linkUrl,img.src AS img, txt.content AS data"+
                    " FROM `text_tb` AS txt"+
                    " INNER JOIN images_tb AS img" +
                    "     ON img.id = txt.img_id"+
                    " WHERE txt.description like 'modal'";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
        
    // return modalJ;
};

let Content = async () => {
    return ({
        "Cards" : await CardsJson(),
        "Carousel" : await CarouselJson(),
        "Services" : await ServiceslJson(),
        "Modal" : await ModalJson()
    });
};

module.exports.HomePageJson = async () => {
    return ({
        "Nav" : await NavBar.NavBarJson(),
        "Content" :  await Content(),
        "Footer" : await Footer.FooterJson()
    });
}
