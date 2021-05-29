
const express = require('express')
const router = express.Router()
const profileJ = require ("./ProfileDB")

module.exports.ProfileJson = async (req, res) => {
    res.json (await profileJ.ProfilePageJson());
}
