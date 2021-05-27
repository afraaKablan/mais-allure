const GalleryDb = require('./GalleryDB');


module.exports.GalleryPage = (req,res) => {
    const category = req.query.Category             //getting the parameter Category from react
    res.json(GalleryDb.GalleryPageJson(category))   //sending the parameter to DB 
    console.log(GalleryDb.GalleryPageJson(category))
}


