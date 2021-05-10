const socialMediaJson = require('./SocialMedia.json')
const contactInfoJson = require('./ContactInfo.json')

let ContactInfoJson = () => {
    return contactInfoJson;
};

let SocialMediaJson = () => {
    return socialMediaJson;
};

module.exports.FooterJson = () => {
    return ({
        "Social" : SocialMediaJson(),
        "ContactInfo" : ContactInfoJson()
    });
};