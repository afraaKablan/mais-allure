const GalleryDb = require('./GalleryDB');


module.exports.GalleryPage = async (req,res) => {
    const category = req.query.Category             //getting the parameter Category from react
    res.json(await GalleryDb.GalleryPageJson(category))   //sending the parameter to DB 
    // console.log(GalleryDb.GalleryPageJson(category))
}


