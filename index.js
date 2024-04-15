const express = require('express');
const env = require('dotenv');
env.config();
const port = process.env.PORT;
const app = express();
const db = require('./middleware/db.connection');
const router = require('./src/user/user.router');
app.use(express.json());
app.use('/user', router);


app.listen(port, function(error){
    if(error){
        console.log('server is error on port', port);
    }else{
        console.log('server is running on port', port);
    }
})