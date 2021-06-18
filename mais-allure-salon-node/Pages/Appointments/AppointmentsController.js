const AppointDB = require('./AppointmentsDB');
const userDB = require ("../User/UserDB")


// this finction updates the appUser table, sets the app id for the user
// updates the status of the appointment to 'ממתין'
let HandleData = async (userName, appId, treat) =>{
    let appoint = await AppointDB.GetAppointmetForUsers(userName, treat)
    //if there is an appointment to that user in the sendtreatment
    if (appoint.length > 0 )
        return ({
            msg: "יש לך תור במערכת לשירות המבוקש אם ברצונך לעדכן או לבטל כנסי לתור בדף החשבון שלך, תודה ",
            isOk: false
        });
    else{
        let user = await userDB.GetUserDetail("username",userName);
        //this query should return one field so we can point to element 0 as our user
        console.log("user is: "+ user[0].userId)
        await AppointDB.SetAppForUser(user[0].userId,appId);
        await AppointDB.UpdateAppStatus(appId,'ממתין')
        return ({
            msg: "התור נשלח לאישור ",
            isOk: true
        });
    }
            
}

// this finction updates the appUser table, sets the app id for the user
// updates the status of the appointment to 'ממתין'
let HandleCancel = async (userName, appId) =>{
    let user = await userDB.GetUserDetail("username",userName);
    await AppointDB.UpdateAppStatus(appId,'פנוי')
    await AppointDB.UpdateAppForUserStatus(user[0].userId,appId,'מבוטל')

      // console.log("Appppppppppppppppppppppppppppppp "+appId)

    return("התור בוטל בהצלחה");
}

module.exports.AppointmentsPage = async (req,res) => {
    const treatment = req.query.Treatment             //getting the parameter Treatment from react
    res.json(await AppointDB.AppointmentsPageJson(treatment))   //sending the parameter to DB 
}

module.exports.AppointmentHandler = async (req,res) => {
    const action = req.query.Action;
    let str = '';
    console.log("action to do " + action);
    console.log("data appID recieved " + JSON.stringify((req.body.data.appointmentID)));
    console.log("data username recieved " + JSON.stringify((req.body.data.username)));
    console.log("data tratment recieved " + JSON.stringify((req.body.data.treat)));

    if (!action)
        str = await HandleData(req.body.data.username, req.body.data.appointmentID, req.body.data.treat);
    else if(action === 'cancel'){
        str = await HandleCancel(req.body.data.username, req.body.data.appointmentID);
    }
    // else if (action === 'timeInterval'){
    //     str = await AppointDB.GetUsersAppointmentsIn24Hours();
    // }
    console.log(str);
    res.json(str);
}


//////////////////
// const AppointDB = require('./AppointmentsDB');
// const userDB = require ("../User/UserDB")


// // this finction updates the appUser table, sets the app id for the user
// // updates the status of the appointment to 'ממתין'
// let HandleData = async (action,userName, appId, treat) =>{
//     let appoint = await AppointDB.GetAppointmetForUsers(userName, treat)
//     let user = await userDB.GetUserDetail("username",userName);
//     // let statusId = await AppointDB.GetStatusID(action);
//     //if ther is an appointment to that user in the sendtreatment
//     if (!action || action == 'update'){
//         if (appoint.length > 0 )
//             return("יש לך תור במערכת לשירות המבוקש אם ברצונך לעדכן או לבטל כנסי לתור בדף החשבון שלך, תודה ");
//         else{
//             console.log("user is: "+ user[0].userId)
//             await AppointDB.SetAppForUser(user[0].userId,appId,statusId);
//             await AppointDB.UpdateAppStatus(appId,'ממתין')
//             //this query should return one field so we can point to element 0 as our user
//             return ("התור נשלח לאישור ");
//         }
//     }
//     else if (action === 'cancel'){
//         //update status of app for user to cancel App
//         await AppointDB.UpdateAppForUserStatus(user[0].userId,appId,'מבוטל')
//     }
            
// }

// module.exports.AppointmentsPage = async (req,res) => {
//     const treatment = req.query.Treatment             //getting the parameter Treatment from react
//     res.json(await AppointDB.AppointmentsPageJson(treatment))   //sending the parameter to DB 
// }

// module.exports.AppointmentHandler = async (req,res) => {
//     const action = req.query.Action
//     console.log("action to do " + action);

//     console.log("data recieved " + JSON.stringify((req.body.data.appointmentID)));
//     console.log("data recieved " + JSON.stringify((req.body.data.username)));
//     console.log("data recieved " + JSON.stringify((req.body.data.treat)));
    
//     let str = await HandleData(action,req.body.data.username, req.body.data.appointmentID, req.body.data.treat);
//     console.log(str);
//     res.json(str);
// }

