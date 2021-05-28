const express = require('express')
const router = express.Router()
const signIn = require('./SignIn/SignInController');
const signUp = require('./SignUp/SignUpController');
const profile = require('./UserProfile/ProfileController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/signIn', signIn.SignInJson);
router.get('/signUp', signUp.SignUpJson);
router.post('/signUpForm', signUp.SignUpFormHandler);

router.get('/profile', profile.ProfileJson);

module.exports = router
