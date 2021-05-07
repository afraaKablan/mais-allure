const express = require('express')
const router = express.Router()
const aboutDb = require('./AboutUsDB');


module.exports.AboutUsPage = (req, res) => {
    res.json(aboutDb.AboutUsJson())
    console.log(aboutDb.AboutUsJson())
}
