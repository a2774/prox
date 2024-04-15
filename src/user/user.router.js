const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.post('/adduser', userController.adduser);

module.exports = router;