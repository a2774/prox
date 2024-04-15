const express = require('express');

const router = express.Router();
const productController = require('./product.controller');

router.post('/addproduct', productController.addproduct);


module.exports = router;