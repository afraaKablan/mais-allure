
const express = require('express')
const router = express.Router()
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');
const DB = require('../../dataBase.js');

let GetMenuElementFromDB = (form) => {  
    let DbQuery = "SELECT ft.id,ft.formItem_id,ft.type,ft.name,ft.className,ft.placeholder,ft.for,"+
                  " fet.name,forms_tb.formItem" + 
                  " FROM `formitems_tb` AS ft" + 
                  " INNER JOIN formselements_tb AS fet" +
                  " ON ft.formElement_id = fet.id"+
                  " INNER JOIN forms_tb"+
                  " ON ft.form_id = forms_tb.id"+
                  " WHERE forms_tb.formItem like " + form + ";"
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes;
    // return NavBarLeftJson;
};

module.exports.ContactUsPageJson = async () => {
    return ({
        "Nav" : await NavBar.NavBarJson(),
        "Footer" : await Footer.FooterJson()
    });
}
