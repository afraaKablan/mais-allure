const express = require('express')
const router = express.Router()
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');
const ContentJ = require('./Content/lineInfo.json');
const DB = require('../../dataBase.js')

let ContentJson = (req, res) => {
    return ContentJ;
};

let GetLine = (type , page) =>{
    let DbQuery =   "SELECT txt.id, txt.class, txt.titleClass , txt.contentClass, txt.title, txt.content, txt.linkUrl, txt.toggle, "+
                    " txt.target, txt.more AS divImgClass, pg.page, img.src AS extraImgSrc, img.alt AS extraAlt, txt.imgClass AS extraImgClass "+
                    " FROM `text_tb` AS txt "+
                    " INNER JOIN page_tb AS pg"+
                    "     ON pg.id = txt.page_id"+
                    " INNER JOIN images_tb AS img "+
                    "     ON img.id = txt.img_id"+
                    " WHERE pg.page like 'aboutUs' "+
                    " AND txt.description like 'card'"+
                    " ORDER BY txt.target;";

    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
}

module.exports.AboutUsJson = async (req, res) => {
    return ({
        "Nav" : await NavBar.NavBarJson(),
        //"Content" : ContentJson(),
        "Content" : await GetLine(),
        "Footer" : await Footer.FooterJson()
    });
}
