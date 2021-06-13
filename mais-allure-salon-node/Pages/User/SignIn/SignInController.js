
const express = require('express')
const router = express.Router()
const signIn = require ("./SignInDB")
const userDB = require ("../UserDB")

// This method gets the user data as parameter
// get data from DB and checks if the username is valid 
// and if the password inserted correct
let HandleUserData = async (user) =>{
    let query = await userDB.GetUserDetail('username',user.username);
    //this query should return one field so we can point to element 0 as our user
    if (query.length >0 ){
        if (user.password != query[0].password ){
            // return ("סיסמה לא נכונה! ");
            return ({
                msg : "סיסמה לא נכונה! ",
                status : "NOT_LOGGED_IN",
                user: {
                    username : user.username,
                    password : user.password
                }
            });
        }
        else
            //return("OK")
            await userDB.UpdateUserloggedInStatus(user)
            return ({
                msg : "OK",
                status : "NOT_LOGGED_IN",
                user: [{
                    username : user.username,
                    password : user.password
                }]
            });
            //redirect to profile page
    }
    else
        return (`שם משתמש לא נמצא`)
}

// This method is called from usercontroller (sub routing)
// gets the data from user side 
// validate data using HandleUserData 
// sends respond 
module.exports.SignInFormHandler = async (req, res) =>{
    console.log(req.body.data.username);
    let str = await HandleUserData(req.body.data);
    console.log(str);
    res.json(str);
}

// This method send the Json of signIn page as respond
// using SignInJson from signInDB that builds the json from DB
module.exports.SignInJson = async (req, res) => {
    res.json (await signIn.SignInJson());
}
