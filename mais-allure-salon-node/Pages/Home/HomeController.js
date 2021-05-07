const express = require('express')
const router = express.Router()
const homeDb = require('./HomeDB');


module.exports.HomePage = (req, res) => {
    res.json(homeDb.HomePageJson())
    console.log(homeDb.HomePageJson())
}
