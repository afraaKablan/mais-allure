const express = require('express')
const router = express.Router()
const DB = require('../../dataBase.js')
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');

// Apply insertion to DB using INSERT query
// module.exports.InsertUserDetails = (user) => {
//     let DbQuery = "INSERT INTO `users_tb` (`userId`, `fname`, `lname`, `username`, `password`, `email`, `phoneNum`, `city_id`, `address`, `photo_id`)"+
//                   " VALUES (NULL, NULL, NULL, '" + user.username + "',"+
//                   " '" + user.password +"', '"+user.email +"', NULL, NULL, NULL, NULL);";
//     let DbRes = DB.DbQuery(DbQuery);
//     console.log("Query : "+ DbRes.toString());
//     return DbRes;
// };

// // Apply updating users data in DB using UPDATE query
// module.exports.UpdateUserDetail = (user) =>{
//     let DbQuery = "UPDATE `users_tb` SET `fname`='" + user.fname +"',"+
//                   " `lname`='" + user.lname +"',`phoneNum`='" + user.phoneNum +"',"+
//                   " `city_id`='" + user.city_id +"',`address`='" + user.address +"' "+
//                   " WHERE username like '" + user.username + "'";
//     let DbRes = DB.DbQuery(DbQuery);
//     return DbRes;
// }

let ServiceslJson = () => {
    let DbQuery = "SELECT ss.classItem,ss.classImg,ss.link,ss.classTitle,ss.title, it.id,it.alt,it.src"+
                  " FROM salonservices_tb AS ss"+
                  " INNER JOIN images_tb AS it "+
                  " ON ss.img_id = it.id;";
    let DbRes = DB.DbQuery(DbQuery);
    console.log("Query : "+ DbRes.toString());
    return DbRes;
    // return servicesJ;
};

// Gets users details according to parameter field where it value equals to value
let GetAllAppointments = (numOfWeeks, status) =>{
    let DbQuery =   " SELECT app.app_id, app.date, app.time, app.description , st.status, prod.prodName"+
                    " FROM `appointments_tb` AS app"+
                    " INNER JOIN products_tb AS prod"+
                    "     ON prod.id = app.treatment_id"+
                    " INNER JOIN status_tb AS st"+
                    "     ON st.statusID = app.status"+
                    " WHERE app.date BETWEEN curdate() AND curdate() + INTERVAL "+ numOfWeeks +" WEEK"+
                    " AND st.status like '"+ status +"'";
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes;
}
let GetAppointmentsDates = () =>{
    let DbQuery =   " SELECT app.app_id, COUNT(app.app_id), DATE_FORMAT(app.date,'%d/%m/%Y') AS date"+
                    " FROM appointments_tb AS app"+
                    " INNER JOIN status_tb AS st"+
                    "     ON st.statusID = app.status"+
                    " WHERE st.status like 'פנוי'"+
                    " AND app.date >= curdate()"+
                    " GROUP BY app.date;";
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes;
   
}
let GetAppointments = (numOfWeeks, status, treatment) =>{
    let DbQuery =   " SELECT app.app_id,  DATE_FORMAT(app.date,'%d/%m/%Y') AS date, app.time, app.description , st.status, prod.prodName"+
                    " FROM `appointments_tb` AS app"+
                    " INNER JOIN products_tb AS prod"+
                    "     ON prod.id = app.treatment_id"+
                    " INNER JOIN status_tb AS st"+
                    "     ON st.statusID = app.status"+
                    " WHERE app.date BETWEEN curdate() AND curdate() + INTERVAL "+ numOfWeeks +" WEEK"+
                    " AND st.status like '"+ status +"'"+
                    " AND prod.prodName like '"+ treatment +"'";
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes;
}
let Content = async (treatment) => {
    return ({
        "Appointments" : await GetAppointments(3, 'פנוי', treatment),
        "AppDates" : await GetAppointmentsDates()
    });
};

// GalleryPageJson function getting the parameter category sending 
// from GallerController and return the json accordingly 
module.exports.AppointmentsPageJson = async (treatment) => {
    if (!treatment){
        return ({
            "Nav" : await NavBar.NavBarJson(),
            "Services" : await ServiceslJson(),
            "Footer" : await Footer.FooterJson()
        });
    }
    else 
        return ({
            "Nav" : await NavBar.NavBarJson(),
            "Content" :  await Content(treatment),
            "Footer" : await Footer.FooterJson()
        })
}
