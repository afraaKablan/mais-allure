const NavBarLeftJson = require('./NavBarLeftJ.json');
// const NavBarRightJson = require('./NavBarRightJ.json');
const DB = require('../../dataBase.js')

let NavBarRightJ = () => {
    let DbQuery = "SELECT * FROM `menuitems_tb` AS mt WHERE mt.direction =1 AND mt.menu_id = 1; ";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return NavBarLeftJson;
};


let DropDownItems = () => {
    let DbQuery = "SELECT id,optionTitle,href FROM `selectoptions_tb` WHERE select_id=4";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return NavBarLeftJson;
};

let NavBarLeftJ = () => {
    let DbQuery = "SELECT * FROM `menuitems_tb` AS mt WHERE mt.direction =2 AND mt.menu_id = 1; ";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return NavBarLeftJson;
};

module.exports.NavBarJson = async () => {
    return ({
        "NavLeft": await NavBarLeftJ(),
        "DropDownItems": await DropDownItems(),
        "NavRight": await NavBarRightJ()
    });
};