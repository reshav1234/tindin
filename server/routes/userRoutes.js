const express = require('express');
const router = express.Router()
const { userLogin, userRegister, userLogOut } = require('../controllers/userController')
const User = require('../models/userSchema')

router.post('/register', userRegister)
router.post('/login', userLogin)
router.get('/logout', userLogOut)

module.exports = router