var express = require('express')
var router = express.Router()
var productsJson = require('./ProductsJ.json')


router.get('/', function(req, res) {
    res.json(productsJson)
    console.log(productsJson)
})

module.exports = router;