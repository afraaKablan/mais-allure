
const express = require('express')
const router = express.Router()
const signIn = require ("./SignInDB")


module.exports.SignInJson = (req, res) => {
    res.json (signIn.SignInJson());
}
