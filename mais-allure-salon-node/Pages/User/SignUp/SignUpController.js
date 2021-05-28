
const express = require('express')
const router = express.Router()
const signUp = require ("./SignUpDB")

module.exports.SignUpJson = async (req, res) => {
    res.json (await signUp.SignUpJson());
}

module.exports.SignUpFormHandler = async (req, res) =>{
    console.log(req.body.data.username);
    res.send(`Server: "I received your POST request. Your Name is: ${req.body.data.username}"`);
}