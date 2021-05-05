const express = require('express')
const router = express.Router()
const NavBar = require('../../General/NavBar/NavBarDB');

let HomePageJson = () => {
    return ('{"Nav":' + JSON.stringify(NavBar.Nav()) + '}')

}
module.exports.HomePage = (req, res) => {
    res.json(JSON.parse(HomePageJson()))
    console.log(JSON.parse(HomePageJson()))
}
