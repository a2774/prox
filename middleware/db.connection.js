const mongoose = require('mongoose');
const env = require('dotenv');
env.config();
mongoose.connect(process.env.DB);
const db = mongoose.connection;
db.on('error', function(error){
    if(error){
        console.log('db is not connect');
    }
});
db.once('open', function(){
    console.log('db is connect');
})    