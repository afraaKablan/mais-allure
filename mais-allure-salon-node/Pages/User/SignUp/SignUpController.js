
const express = require('express')
const router = express.Router()
const signUp = require ("./SignUpDB")
const userDB = require ("../UserDB")

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
    console.log(req.body.data.username);
    let str = await HandleUserData(req.body.data);
    res.send(str);
}