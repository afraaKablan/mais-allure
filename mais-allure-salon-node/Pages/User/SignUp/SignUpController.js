
const express = require('express')
const router = express.Router()
const signUp = require ("./SignUpDB")


module.exports.SignUpJson = (req, res) => {
    res.json (signUp.SignUpJson());
}
