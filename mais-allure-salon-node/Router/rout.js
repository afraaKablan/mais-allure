const express = require('express')
const router = express.Router()
const products = require('../Pages/Products/ProductController.js')
const home = require('../Pages/Home/HomeController.js')
const about = require('../Pages/AboutUs/AboutUsController.js')
const gallery = require('../Pages/Gallery/GalleryController.js')
const appoint = require('../Pages/Appointments/AppointmentsController.js')
const contact = require('../Pages/ContactUs/ContactUsController.js')
var user = require('../Pages/User/UserController.js')

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

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
router.get('/gallery', gallery.GalleryPage)


router.get('/appointment', appoint.AppointmentsPage)
router.post('/appointmentUser', appoint.AppointmentHandler)


router.get('/contact', contact.ContactUsPage)
// router.post('/signInData', signIn)

// define the about route
router.get('/about', about.AboutUsPage)
router.use('/products', products)
router.use('/user', user)

module.exports = router