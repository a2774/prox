const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.post('/adduser', userController.adduser);
router.patch('/update/:id', userController.updateuser); 

module.exports = router; 