
const express = require('express')
const router = express.Router()
const NavBar = require('../../../Parts/NavBar/NavBarDB');
const Footer = require('../../../Parts/Footer/FooterDB');
const productsJ = require('../../../Pages/Products/ProductsJ.json')
const usersJ = require('../RegisteredUsers.json')
const DB = require('../../../dataBase.js')


let UsersJson = () => {
    return usersJ;
};

let ProductsJson = () => {
    return productsJ;
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


let  Content= async () => {
    return ({
        "Users": UsersJson(),
        "Products": ProductsJson(),
        "Services" : await ServiceslJson()
    });
};

module.exports.ProfilePageJson = async (req, res) => {
    return ({
        "Nav":await NavBar.NavBarJson(),
        "Content": await  Content(),
        "Footer" : await Footer.FooterJson()
    });
}
