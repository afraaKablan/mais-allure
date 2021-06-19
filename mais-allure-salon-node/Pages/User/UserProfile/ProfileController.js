
const express = require('express')
const router = express.Router()
const profileJ = require ("./ProfileDB")

module.exports.ProfileJson = async (req, res) => {
    const username = req.query.User;
    // const app = req.query.Appointment;
    console.log("profile gets param================ "+username);    
    res.json (await profileJ.ProfilePageJson(username));
}

// module.exports.ProfileUpdateImg = async (req, res) => {
//     const imgSrc = req.query.ImgSrc;            //getting the parameter from react
//     const username = req.query.user;            //getting the parameter from react

//     console.log("profile gets Image============== "+imgSrc,username);    
//     res.json (await profileJ.ProfileUpdateImg(username, imgSrc));
// }