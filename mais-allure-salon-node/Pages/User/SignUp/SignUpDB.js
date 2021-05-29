
const express = require('express')
const router = express.Router()
const NavBar = require('../../../Parts/NavBar/NavBarDB');
const Footer = require('../../../Parts/Footer/FooterDB');
const formDB = require ('../../../General/Form/FormDB')
const DB = require('../../../dataBase.js')

let GetFormSideData = (page) => {
    let DbQuery =   "SELECT txt.*, pg.page "+
                    " FROM `text_tb` AS txt"+
                    " INNER JOIN page_tb AS pg"+
                    "     ON txt.page_id = pg.id"+
                    " WHERE pg.page like '" + page + "'"+
                    " AND txt.description like 'sideDiv';";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return servicesJ;
};
let Content = async () => {
    return ({
        "SideData" : await GetFormSideData('signUp')
    });
};

module.exports.SignUpJson = async (req, res) => {
    return ({
        "Nav" : await NavBar.NavBarJson(),
        "Content" :  await Content(),
        "Footer" : await Footer.FooterJson()
    });
}
