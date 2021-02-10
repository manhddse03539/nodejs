const express = require('express');
const multer = require('multer');

const router = express.Router();
const userController = require('../controller/user.controller');
const validateUser = require('../validate/user.validate');
const upload = multer({ dest: './public/uploads' });

router.get('/', userController.index);

router.get('/search', userController.search);

router.get('/create', userController.create);

router.post('/create', upload.single('avatar'), validateUser.createPost, userController.createPost);

router.get('/:id', userController.view);

module.exports = router;