// const NavBarLeftJson = require('./NavBarLeftJ.json');
// const NavBarRightJson = require('./NavBarRightJ.json');
const DB = require('../../dataBase.js');
const e = require('express');

let GetMenuElementFromDB = (dir, id, level, parentId) => {  
    let DbQuery = "SELECT * FROM `menuitems_tb` AS mt"+
                  " WHERE mt.direction ="+ dir + 
                  " AND mt.menu_id = "+ id +
                  " AND level="+ level +";";
                  " AND parent_id= "+ parentId + ";"
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes;
    // return NavBarLeftJson;
};

let AppendQueryResults = async () =>{
    let extra = {}
    menuQ =  await GetMenuElementFromDB(1,1,1,null)

    const data = await Promise.all(menuQ.map(async singleItem => {
        if(singleItem.isDrop == 0)
            return singleItem;
        else if(singleItem.isDrop == 1){
            let drop_downs = await GetMenuElementFromDB(1,1,singleItem.level + 1 ,singleItem.menuItem_id);
            singleItem.drop_items = drop_downs;
            return singleItem;
        } 
    }))
    console.log(data);
    return data;
}

module.exports.NavBarJson = async () => {
    return ({
        "NavLeft": await GetMenuElementFromDB(2,1,1,null),
        "NavRight": await AppendQueryResults()
    });
};


// let NavBarRightJ = () => {  
//     let DbQuery = "SELECT * FROM `menuitems_tb` AS mt"+
//                   " WHERE mt.direction =1"+
//                   " AND mt.menu_id = 1 AND level=1; ";
//     let DbRes = DB.DbQuery(DbQuery);
//     return DbRes;
//     // return NavBarLeftJson;
// };

// let DropDownItems = (level, id) => {
//     let DbQuery = "SELECT * FROM `menuitems_tb` "+
//                   " WHERE level ="+ level +
//                   " AND parent_id= "+ id + ";";
//     let DbRes = DB.DbQuery(DbQuery);
//     console.log("Query3 : "+ DbRes.toString());
//     return DbRes;
//     // return NavBarLeftJson;
// };

// let NavBarLeftJ = () => {
//     let DbQuery = "SELECT * FROM `menuitems_tb` AS mt"+
//                   " WHERE mt.direction = 2 AND mt.menu_id = 1; ";
//     let DbRes = DB.DbQuery(DbQuery);
//     console.log("Query2 : "+ DbRes.toString());
//     return DbRes;
//     // return NavBarLeftJson;
// };
