const express = require('express')
const router = express.Router()
const ServiceDB = require('./ServiceInfoDB');

module.exports.ServiceInfoPage = async (req, res) => {
    const treat = req.query.Treatment
    res.json(await ServiceDB.ServiceInfoPageJson(treat))
    // console.log(homeDb.HomePageJson())
}
