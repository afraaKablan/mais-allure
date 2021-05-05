const glleryJson = require('./GlleryJ.json');

module.exports.GalJson = (req, res) => {
    res.json(glleryJson);
    console.log(glleryJson);
};