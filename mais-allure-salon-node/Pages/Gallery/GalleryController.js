var express = require('express')
var router = express.Router()
const GalleryDb = require('./GalleryDB');

router.get('/', GalleryDb.GalleryPageJson);

module.exports = router;