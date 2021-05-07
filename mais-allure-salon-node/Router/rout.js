var express = require('express')
var router = express.Router()
const products = require('../Pages/Products/ProductController.js')
var home = require('../Pages/Home/HomeController.js')
var about = require('../Pages/AboutUs/AboutUsController.js')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })
    // define the home page route
router.get('/', function(req, res) {
    res.json('Home')
    console.log('Home')
})

router.get('/home', home.HomePage)

// define the about route
router.get('/about', about.AboutUsPage)

router.use('/products', products)


module.exports = router