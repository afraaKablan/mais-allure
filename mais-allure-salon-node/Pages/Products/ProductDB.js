const ProductsJson = require('./ProductsJ.json');
const NavBar = require('../../General/NavBar/NavBarDB');
const socialMediaJson = require('../../Parts/Footer/SocialMedia.json')
const contactInfoJson = require('../../Parts/Footer/ContactInfo.json')
 
let ProductsJ = (req, res) => {
    return ProductsJson;
};
let SocialMediaJson = () => {
    return socialMediaJson;
};

let ContactInfoJson = () => {
    return contactInfoJson;
};
let Footer = () => {
    return ({
        "Social" : SocialMediaJson(),
        "ContactInfo" : ContactInfoJson()
    });
};
module.exports.ProductsJson = (req, res) => {
    res.json ({
        "Nav" : NavBar.NavBarJson(),
        "Content" : ProductsJ(),
        "Footer": Footer()
    });
}
