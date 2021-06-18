const express = require('express')
const router = express.Router()
const DB = require('../../dataBase.js')

// Apply insertion to DB using INSERT query
module.exports.InsertUserDetails = (user) => {
    let DbQuery = "INSERT INTO `users_tb` (`userId`, `fname`, `lname`, `username`, `password`, `email`, `phoneNum`, `city_id`, `address`, `photo_id`)"+
                  " VALUES (NULL, NULL, NULL, '" + user.username + "',"+
                  " '" + user.password +"', '"+user.email +"', NULL, NULL, NULL, NULL);";
    let DbRes = DB.DbQuery(DbQuery);
    // console.log("Query : "+ DbRes.toString());
    return DbRes;
};

// Apply updating users data in DB using UPDATE query
module.exports.UpdateUserDetail = (user) =>{
    let DbQuery = "UPDATE `users_tb` SET `fname`='" + user.fname +"',"+
                  " `lname`='" + user.lname +"',`phoneNum`='" + user.phoneNum +"',"+
                  " `city_id`='" + user.city_id +"',`address`='" + user.address +"' "+
                  " WHERE username like '" + user.username + "'";
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes;
}

// // Apply updating users data in DB using UPDATE query
// module.exports.UpdateUserloggedInStatus = (user) =>{
//     let DbQuery =  " UPDATE `users_tb`"+ 
//                    " SET is_signedIn=true"+ 
//                    " WHERE username like '" + user.username + "'"          
//     let DbRes = DB.DbQuery(DbQuery);
//     return DbRes;
// }


// Gets users details according to parameter field where it value equals to value
module.exports.GetUserDetail = (field,value) =>{
    let DbQuery = "SELECT userId,username,password,email"+
                  " FROM `users_tb` "+
                  " WHERE "+field +" like '"+value+"';";
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes;
}

//Gets all users data according to username
module.exports.GetUserDetailByUsername = (username) =>{
    let DbQuery =   "SELECT us.*, img.src as imgSrc "+
                    " FROM `users_tb` AS us" +
                    " INNER JOIN images_tb AS img"+
                    "     ON img.id = us.photo_id"+
                    " WHERE us.username like '"+ username +"';"
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes;
}

