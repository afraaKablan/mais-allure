const express = require('express')
const router = express.Router()
const signIn = require('./SignIn/SignInController');
const signUp = require('./SignUp/SignUpController');
const profile = require('./UserProfile/ProfileController');

router.get('/signIn', signIn.SignInJson)
router.get('/signUp', signUp.SignUpJson)
router.get('/profile', profile.ProfileJson)

module.exports = router
