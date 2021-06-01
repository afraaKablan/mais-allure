
const express = require('express')
const router = express.Router()
const signUp = require ("./SignUpDB")
const userDB = require ("../UserDB")

// This method gets the sign up user data as parameter
// Try to get the user to make sure that username Valid
// If userday is valid insert to DB using InsertUserDetails
// and send respond accordingly 
let HandleUserData = async (user) =>{
    let query = await userDB.GetUserDetail('username',user.username);
    if (query.length >0 )
        return ('שם משתמש תפוס');
    else
        userDB.InsertUserDetails(user);
        return (`ברוכה הבאה  ${user.username} תהליך הרישום הסתיים בהצלחה נא לבצע כניסה`)
}


module.exports.SignUpJson = async (req, res) => {
    res.json (await signUp.SignUpJson());
}

  
module.exports.SignUpFormHandler = async (req, res) =>{
    console.log(req.body.data.username);  // Getting user parameter 
    let str = await HandleUserData(req.body.data);
    res.send(str);
}