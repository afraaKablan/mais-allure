const NavBarLeftJson = require('./NavBarLeftJ.json');
// const NavBarRightJson = require('./NavBarRightJ.json');
const DB = require('../../dataBase.js')

let NavBarRightJ = () => {
    let DbQuery = "SELECT * FROM `menuitems_tb` AS mt WHERE mt.direction =1 AND mt.menu_id = 1 AND level=1; ";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    

    return DbRes;
    // return NavBarLeftJson;
};


let DropDownItems = () => {
    let DbQuery = "SELECT * FROM `menuitems_tb` WHERE level=2 AND parent_id=4";
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