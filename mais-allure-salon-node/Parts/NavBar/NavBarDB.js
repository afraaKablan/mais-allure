const NavBarLeftJson = require('./NavBarLeftJ.json');
// const NavBarRightJson = require('./NavBarRightJ.json');
const DB = require('../../dataBase.js');
const e = require('express');

let GetMenuElementFromDB = (dir, menuType, level, parentId) => { 
    let cond= "";
    if (parentId == null)
        cond =  " AND mt.parent_id IS NULL;" ;
    else 
        cond =" AND mt.parent_id ="+ parentId +";"
    let DbQuery = "SELECT mt.*, mlt.menu_name, mdr.direction"+
                    " FROM `menuitems_tb` AS mt"+
                    " INNER JOIN menulist_tb AS mlt"+
                    "   ON mt.menu_id = mlt.menu_id"+
                    " INNER JOIN menuitemsdir_tb AS mdr"+
                    "    ON mdr.id = mt.direction"+
                    " WHERE mlt.menu_name like '"+ menuType + "'"+
                    " AND mt.level= " + level +
                    " AND mdr.direction like '"+ dir +"'" + cond + ";"
                    
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes;
    // return NavBarLeftJson;
};

let AppendQueryResults = async () =>{
    let extra = {}
    menuQ =  await GetMenuElementFromDB('right','header',1,null)

    let data = await Promise.all(menuQ.map(async singleItem => {
        if(singleItem.isDrop == 0)
            return singleItem;
        else if(singleItem.isDrop == 1){
            let drop_downs = await GetMenuElementFromDB('right','header',singleItem.level + 1 ,singleItem.menuItem_id);
            singleItem.drop_items = drop_downs;
     
            return singleItem;
        } 
    }))
    console.log(data);
    return data;
}

let GetSalonData = () =>{
    let DbQuery = "SELECT si.id, si.name,si.email,si.address, si.phoneNum,"+ 
                  " img1.src AS logoNameImg ,"+
                  " img1.alt AS logoNameAlt,"+
                  " img2.src AS logoImage,"+
                  " img2.alt AS logoImageAlt"+
                  " FROM `saloninfo_tb` AS si "+
                  " INNER JOIN images_tb AS img1" +
                  "    ON si.logoName_id = img1.id" +
                  " INNER JOIN images_tb AS img2" +
                  "    ON si.logoImg_id = img2.id;";
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes; 
}
module.exports.NavBarJson = async () => {
    return ({
        "Logo": await GetSalonData(),
        "NavLeft": await GetMenuElementFromDB('left','header',1,null),
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
