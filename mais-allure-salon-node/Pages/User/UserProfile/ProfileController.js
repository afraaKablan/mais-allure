
const express = require('express')
const router = express.Router()
const profileJ = require ("./ProfileDB")

module.exports.ProfileJson = (req, res) => {
    res.json (profileJ.ProfilePageJson());
}
