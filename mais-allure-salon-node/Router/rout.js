var express = require('express')
var router = express.Router()
const products = require('../Pages/Products/ProductController.js')
var navbar = require('../General/NavBar/NavBarController.js')

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
    // define the about route
router.get('/about', function(req, res) {
    res.send('About ')
})

router.use('/products', products)
router.use('/nav', navbar)


module.exports = router