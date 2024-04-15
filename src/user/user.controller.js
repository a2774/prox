const User = require('./user.model');

module.exports.adduser = async(req, res)=>{
    const {name, email, password} = req.body;
    try {
        const user = new User({name, email, password});
        const newuser = await user.save();
        res.status(200).json({message:"User add successfully", newuser});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"server problem"});
    }
}


module.exports.updateuser = async(req, res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        if(!user){
            return res.json({message:"User is not found"});
        }
        res.status(200).json({message:"Update user", user});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something worng"});
    }
}

