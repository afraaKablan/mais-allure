
const express = require('express')
const router = express.Router()
const NavBar = require('../../../Parts/NavBar/NavBarDB');
const Footer = require('../../../Parts/Footer/FooterDB');
const AppointDB = require('../../../Pages/Appointments/AppointmentsDB')
const DB = require('../../../dataBase.js')
const userDB = require ("../UserDB")



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

let  Content= async (username) => {
    if(username)
        return ({
            "Users": await userDB.GetUserDetailByUsername(username),
            "Services" : await ServiceslJson(),
            "Appointments" : await AppointDB.GetAllAppointmetForUsers(username)  
        });
};

module.exports.ProfilePageJson = async (username) => {
    return ({
        "Nav":await NavBar.NavBarJson(),
        "Content": await  Content(username),
        "Footer" : await Footer.FooterJson()
    });
}

// module.exports.ProfileUpdateImg = async (username, imgSrc)=>{
//     //update img
//     return ('OK')
// }
