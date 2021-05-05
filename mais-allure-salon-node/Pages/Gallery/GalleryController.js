var express = require('express')
var router = express.Router()
const GalleryDB = require('./GalleryDB');

router.get('/', GalleryDB.GalJson);

module.exports = router;