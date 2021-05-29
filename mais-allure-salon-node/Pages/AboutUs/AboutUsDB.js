const express = require('express')
const router = express.Router()
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');
const ContentJ = require('./Content/lineInfo.json');
const DB = require('../../dataBase.js')

let ContentJson = (req, res) => {
    return ContentJ;
};

let GetCards = (type , page) =>{
    let DbQuery =   "SELECT txt.id, txt.title, txt.class, txt.titleClass, txt.contentClass, txt.toggle ,txt.target ,txt.more ,txt.imgClass ,txt.imgId ,txt.hclass ,txt.content , pg.page , img.src AS imgSrc, img.alt, txt.description "+
                    " FROM `text_tb` AS txt"+
                    " LEFT JOIN images_tb AS img"+
                    "    ON img.id=txt.img_id"+
                    " INNER JOIN page_tb AS pg"+
                    "    ON pg.id = txt.page_id"+
                    " WHERE txt.description like '"+ type +"' "+
                    " AND pg.page like '"+ page +"'";

    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
}
// let BuildLine = async () =>{
//     let lineQ = await GetCards('line','aboutUs');
//     let cardsQ = await GetCards('card','aboutUs');
//     let extras = await GetCards('extra','aboutUs');
    
//     let data = await Promise.all(lineQ.map(async singleItem => {
//         return ({
            
//         })
//     } ))

// }

module.exports.AboutUsJson = async (req, res) => {
    return ({
        "Nav" : await NavBar.NavBarJson(),
        "Content" : ContentJson(),
        "Footer" : await Footer.FooterJson()
    });
}
