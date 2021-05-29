const express = require('express')
const router = express.Router()
const aboutDb = require('./AboutUsDB');


module.exports.AboutUsPage = async (req, res) => {
    res.json(await aboutDb.AboutUsJson())
    // console.log(aboutDb.AboutUsJson())
}
