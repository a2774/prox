const mongoose = require('mongoose');
const productschema = new mongoose.Schema({
    productname:{
        type:String,
    },
    price:{
        type:String,
    },
    categry:{
        type:String,
    },
    owner:{
       type:mongoose.Types.ObjectId,
       ref:'User'
    }
});

const Product = mongoose.model('Product', productschema);
module.exports = Product;