// const socialMediaJson = require('./SocialMedia.json')
const contactInfoJson = require('./ContactInfo.json')
const DB = require('../../dataBase.js')

let ContactInfoJson = () => {
    let DbQuery = "SELECT si.id,si.name,si.email,si.address,si.phoneNum FROM `saloninfo_tb` AS si ;"
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return contactInfoJson;

    
};

let SocialMediaJson = () => {
    let DbQuery = "SELECT mt.*, mlt.menu_name" +
                  " FROM `menuitems_tb` AS mt" +
                  " INNER JOIN menulist_tb AS mlt" +
                  "     ON mt.menu_id = mlt.menu_id "+
                  " WHERE mlt.menu_name like 'footer';"
    
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return socialMediaJson;
};

module.exports.FooterJson = async () => {
    return ({
        "Social" : await SocialMediaJson(),
        "ContactInfo" : await ContactInfoJson()
    });
};