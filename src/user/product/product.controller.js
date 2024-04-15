const Product = require('./product.model');

module.exports.addproduct = async(req, res)=>{
    const {productname, price, categry, owner} = req.body;
    try {
        const product = new Product({productname, price, categry, owner});
        const newproduct = await product.save();
        res.status(200).json({message:"product is add", newproduct});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something problem"});
    }
}