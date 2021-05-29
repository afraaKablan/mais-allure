const express = require('express')
const router = express.Router()
const DB = require('../../dataBase.js')

module.exports.GetFormExtraData = (form) => {
    let DbQuery = "SELECT frmEx.*, frm.formItem"+
                   " FROM `formextra_tb` AS frmEx"+
                   " INNER JOIN forms_tb AS frm"+
                   "     ON frm.id = frmEx.form_id"+
                   " WHERE frm.formItem like '"+ form +"'";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return servicesJ;
};

module.exports.GetFormItemsData = (form) => {
    let DbQuery =   "SELECT frmItm.*, frm.formItem, elem.name AS elemType"+ 
                    " FROM `formitems_tb` AS frmItm"+
                    " INNER JOIN forms_tb AS frm"+
                    "    ON frm.id = frmItm.form_id"+
                    " INNER JOIN formselements_tb As elem"+
                    "    ON elem.id = frmItm.formElement_id"+
                    " WHERE frm.formItem like '"+form+"';";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return servicesJ;
};


