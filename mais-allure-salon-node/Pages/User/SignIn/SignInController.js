
const express = require('express')
const router = express.Router()
const signIn = require ("./SignInDB")
const userDB = require ("../UserDB")

let HandleUserData = async (user) =>{
    let query = await userDB.GetUserDetail('username',user.username);
    //this query should return one field so we can point to element 0 as our user
    if (query.length >0 ){
        if (user.password != query[0].password )
            return ("סיסמה לא נכונה! ");
        else
            return ("ברוכה הבאה לדף הפרופיל שלך")
            //redirect to profile page
    }
    else
        return (`שם משתמש לא נמצא`)
}

module.exports.SignInJson = async (req, res) => {
    res.json (await signIn.SignInJson());
}

module.exports.SignInFormHandler = async (req, res) =>{
    console.log(req.body.data.username);
    let str = await HandleUserData(req.body.data);
    res.send(str);
}