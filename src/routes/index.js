const express = require('express')
const userController = require('../controllers/user.ctl')

const router = express.Router()

router.post('/user/signup', userController.userSignUp)
router.post('/user/signin', userController.userSignIn)
router.post('/user/signout', userController.userSignOut)

module.exports = router