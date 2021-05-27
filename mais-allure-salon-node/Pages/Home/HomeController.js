const express = require('express')
const router = express.Router()
const homeDb = require('./HomeDB');

module.exports.HomePage = async (req, res) => {
    res.json(await homeDb.HomePageJson())
    // console.log(homeDb.HomePageJson())
}
