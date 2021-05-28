const express = require('express')
const router = express.Router()
const contactDb = require('./ContactUsDB');

module.exports.ContactUsPage = async (req, res) => {
    res.json(await contactDb.ContactUsPageJson())
    // console.log(contactDb.ContactUsPageJson())
}
