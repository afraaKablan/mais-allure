const express = require('express')
const router = express.Router()
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');
const DB = require('../../dataBase.js')
const appointBD = require('../../Pages/Appointments/AppointmentsDB')

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

// let Content = async (treat) => {
//     return ({
//          "Services" : await appointBD.Content(treat),
//     });
// };

module.exports.ServiceInfoPageJson = async (treat) => {
    return ({
        "Nav" : await NavBar.NavBarJson(),
        "Content" :  await appointBD.Content(treat),
        "Footer" : await Footer.FooterJson()
    });
}
