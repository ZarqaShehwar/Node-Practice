const mongoose = require('mongoose');
require('dotenv').config();

//localHost s not wirte we use its IP address instead of localHost 
// const mongoDbUrl = 'mongodb://127.0.0.1:27017/hotels';
const mongoDbUrl = process.env.DBUrl;

mongoose.connect(mongoDbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('connected',()=>console.log("connected"));
db.on('error',(err)=>console.log("connected",err));
db.on('disconnected',()=>console.log("Disconnected"));

module.exports=db;