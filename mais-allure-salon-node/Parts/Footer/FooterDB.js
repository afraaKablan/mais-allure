// const socialMediaJson = require('./SocialMedia.json')
const contactInfoJson = require('./ContactInfo.json')
const DB = require('../../dataBase.js')

let ContactInfoJson = () => {
    return contactInfoJson;
};

let SocialMediaJson = () => {
    let DbQuery = "SELECT * FROM `menuitems_tb` AS mt WHERE mt.menu_id = 2; ";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return socialMediaJson;
};

module.exports.FooterJson = async () => {
    return ({
        "Social" : await SocialMediaJson(),
        "ContactInfo" : ContactInfoJson()
    });
};