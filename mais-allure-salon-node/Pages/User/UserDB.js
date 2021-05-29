const express = require('express')
const router = express.Router()
const DB = require('../../dataBase.js')


module.exports.InsertUserDetails = (user) => {
    let DbQuery = "INSERT INTO `users_tb` (`userId`, `fname`, `lname`, `username`, `password`, `email`, `phoneNum`, `city_id`, `address`, `photo_id`)"+
                  " VALUES (NULL, NULL, NULL, '" + user.username + "',"+
                  " '" + user.password +"', '"+user.email +"', NULL, NULL, NULL, NULL);";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return servicesJ;
};

module.exports.GetUserDetail = (field,value) =>{
    let DbQuery = "SELECT username,password,email"+
                  " FROM `users_tb` "+
                  " WHERE "+field +" like '"+value+"';";
    let DbRes = DB.DbQuery(DbQuery);
    // console.log("Query : "+ DbRes);
    return DbRes;
}

