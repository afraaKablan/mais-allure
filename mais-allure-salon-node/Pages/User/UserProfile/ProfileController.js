
const express = require('express')
const router = express.Router()
const profileJ = require ("./ProfileDB")

module.exports.ProfileJson = async (req, res) => {
    const username = req.query.User;
    // const app = req.query.Appointment;
    console.log("profile gets param================ "+username);    
    res.json (await profileJ.ProfilePageJson(username));
}
