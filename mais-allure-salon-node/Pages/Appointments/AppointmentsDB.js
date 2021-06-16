const express = require('express')
const router = express.Router()
const DB = require('../../dataBase.js')
const NavBar = require('../../Parts/NavBar/NavBarDB');
const Footer = require('../../Parts/Footer/FooterDB');

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
let GetStatusID = (status) => {
    let DbQuery =   "SELECT statusID "+
                    " FROM `status_tb`" +
                    " WHERE status like '"+ status +"'";
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes;
}

let Content = async (treatment) => {
    return ({
        "Appointments" : await GetAppointments(3, 'פנוי', treatment),
        "AppDates" : await GetAppointmentsDates()
    });
};

module.exports.SetAppForUser = (userId, appId) =>{
    let DbQuery =   "INSERT INTO `userappointment_tb` (`id`, `user_id`, `appointment_id`, `price`, `discount_id`, `status_id`, `paymentDetails_id`, `date`) "+
                    " VALUES (NULL, '" + userId + "', '" + appId + "', NULL,NULL, '2', '', '" + new Date() + "');";
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes;
}


module.exports.UpdateAppStatus = async (appId,status) =>{
    let statusID = await GetStatusID(status);
    let DbQuery =   "UPDATE `appointments_tb`  "+
                    " SET `status`='"+statusID[0].statusID+"'" +
                    " WHERE app_id = '"+appId+"'";
    let DbRes = DB.DbQuery(DbQuery);
    return DbRes;
}


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
