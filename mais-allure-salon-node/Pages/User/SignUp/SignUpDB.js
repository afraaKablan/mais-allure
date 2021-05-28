
const express = require('express')
const router = express.Router()
const NavBar = require('../../../Parts/NavBar/NavBarDB');
const Footer = require('../../../Parts/Footer/FooterDB');
const DB = require('../../../dataBase.js')


module.exports.InsertUserDetails = (user) => {
    let DbQuery = "INSERT INTO `users_tb` (`userId`, `fname`, `lname`, `username`, `password`, `email`, `phoneNum`, `city_id`, `address`, `photo_id`)"+
                  " VALUES (NULL, NULL, NULL, '" + user.username + "',"+
                  " '" + user.password +"', '"+user.email +"', NULL, NULL, NULL, NULL);";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return servicesJ;
};
module.exports.CheckUserName = (userName) =>{
    let DbQuery = "SELECT username,password,email"+
                  " FROM `users_tb` "+
                  " WHERE username like '"+userName+"';";
    let DbRes = DB.DbQuery(DbQuery);
    // console.log("Query : "+ DbRes);
    return DbRes;
}

module.exports.SignUpJson = async (req, res) => {
    return ({
        "Nav" : await NavBar.NavBarJson(),
        "Footer" : await Footer.FooterJson()
    });
}
