
const express = require('express')
const router = express.Router()
const signIn = require ("./SignInDB")
const DB = require('../../../dataBase.js');


module.exports.SignInJson = async (req, res) => {
    // console.log(req.body);
    res.json (await signIn.SignInJson());
}
