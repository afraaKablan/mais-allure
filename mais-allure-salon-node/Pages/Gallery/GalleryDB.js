const express = require('express')
const router = express.Router()
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');
// const categoriesJ = require('./GalleryCategoriesJ.json');
const DB = require('../../dataBase.js')

let CategoriesJson = () => {
    let DbQuery = "SELECT txt.*, pg.page "+
                  " FROM `text_tb` AS txt" +
                  " INNER JOIN page_tb AS pg"+
                  "    ON txt.page_id = pg.id"+
                  " WHERE txt.description like 'sideDiv'"+
                  " AND pg.page like 'gallery';";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return categoriesJ;
};

let GetImages = (category) => {
    let DbQuery = "SELECT it.*, cat.categoryName" + 
                  " FROM images_tb AS it" + 
                  " INNER JOIN categories_tb AS cat" +  
                  " ON cat.id = it.category_id" + 
                  " WHERE cat.categoryName like '"+category+"';"  
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
}

//GalleryPageJson function getting the parameter category sending from controller 
module.exports.GalleryPageJson = async (category) => {
    if (!category){
        return ({
            "Nav" : await NavBar.NavBarJson(),
            "Categories" : await CategoriesJson(),
            "Footer" : await Footer.FooterJson()
        });
    }
    else 
        return ({
            "Nav" : await NavBar.NavBarJson(),
            "Images" : await GetImages(category),
            "Footer" : await Footer.FooterJson()
        })
}
