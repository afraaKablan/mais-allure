const express = require('express')
const router = express.Router()
const productDb = require('./ProductDB');

router.get('/', productDb.ProductsJson)




module.exports = router
