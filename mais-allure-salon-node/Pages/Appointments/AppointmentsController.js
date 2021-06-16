const AppointDB = require('./AppointmentsDB');
const userDB = require ("../User/UserDB")


// this finction updates the appUser table, sets the app id for the user
// updates the status of the appointment to 'ממתין'
let HandleData = async (userName, appId) =>{
    let user = await userDB.GetUserDetail("username",userName);
    console.log("user is: "+ user[0].userId)
    await AppointDB.SetAppForUser(user[0].userId,appId);
    await AppointDB.UpdateAppStatus(appId,'ממתין')
    //this query should return one field so we can point to element 0 as our user
    return ("התור נשלח לאישור ");
            
}


module.exports.AppointmentsPage = async (req,res) => {
    const treatment = req.query.Treatment             //getting the parameter Treatment from react
    res.json(await AppointDB.AppointmentsPageJson(treatment))   //sending the parameter to DB 
}

module.exports.AppointmentHandler = async (req,res) => {
    console.log("data recieved " + JSON.stringify((req.body.data.appointmentID)));
    console.log("data recieved " + JSON.stringify((req.body.data.username)));

    let str = await HandleData(req.body.data.username,req.body.data.appointmentID);
    console.log(str);
    res.json(str);
}

