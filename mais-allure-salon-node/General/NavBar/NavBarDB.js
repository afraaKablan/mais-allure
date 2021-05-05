const NavBarLeftJson = require('./NavBarLeftJ.json');
const NavBarRightJson = require('./NavBarRightJ.json');

let NavBarLeftJ = (req, res) => {
    return NavBarLeftJson;
};
let NavBarRightJ = (req, res) => {
    return NavBarRightJson;
};

module.exports.NavBarJson = (req, res) => {
    return ({
        "NavLeft": NavBarLeftJ(),
        "NavRight": NavBarRightJ()
    });
};