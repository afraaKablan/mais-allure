const express = require('express')
const router = express.Router()
const contactDb = require('./ContactUsDB');

module.exports.ContactUsPage = (req, res) => {
    res.json(contactDb.ContactUsPageJson())
    console.log(contactDb.ContactUsPageJson())
}
