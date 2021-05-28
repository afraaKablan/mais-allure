
const express = require('express')
const router = express.Router()
const NavBar = require('../../../Parts/NavBar/NavBarDB');
const Footer = require('../../../Parts/Footer/FooterDB');
const DB = require('../../../dataBase.js')


let InsertUserDetails = (userId, fname, lname, username, password, phoneNum, city_id, address, photo_id) => {
    let DbQuery = "INSERT INTO `users_tb`(`userId`, `fname`, `lname`, `username`, `password`, `phoneNum`, `city_id`, `address`, `photo_id`)"+
                      " VALUES ('"+ userId + "','" + fname + "','"+ lname + "','" +username+"','"+password+"','"+phoneNum+"','"+city_id+"','"+address+"','"+photo_id+"');";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return servicesJ;
};

module.exports.SignUpJson = async (req, res) => {
    InsertUserDetails('','שיר','בהן','sheer','333333','123445777','1','ת.ד 202','')
    return ({
        "Nav" : await NavBar.NavBarJson(),
        "Footer" : await Footer.FooterJson()
    });
}
