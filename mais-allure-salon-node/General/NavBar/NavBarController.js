var express = require('express')
var router = express.Router()
var navJson = require('./NavBarRightJ.json')
var navLeftJson = require('./NavBarLeftJ.json')

router.get('/right', function(req, res) {
    res.json(navJson)
    console.log(navJson)
})
router.get('/left', function(req, res) {
    res.json(navLeftJson)
    console.log(navLeftJson)
})
module.exports = router;