var express = require('express')
var router = express.Router()
const ProductDB = require('./ProductDB');

router.get('/', ProductDB.proJson);

module.exports = router;