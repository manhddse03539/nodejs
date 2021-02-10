const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');
const validateAuth = require('../validate/auth.validate');

router.get('/login', authController.login);
router.post('/login', validateAuth.loginPost, authController.postLogin);

module.exports = router;