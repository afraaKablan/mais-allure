const GalleryDb = require('./GalleryDB');


module.exports.GalleryPage = (req,res) => {
    const category = req.query.Category
    res.json(GalleryDb.GalleryPageJson(category))
    console.log(GalleryDb.GalleryPageJson(category))
}

