var express = require('express');
const app = express();
const node = require('./node.js')
const db = require('./db.js')
const BodyParser = require('body-parser');
const Person = require('./models/Person.js');
const Menu = require('./models/Menu.js');
const PersonRouter = require('./routes/PersonRoutes.js');
const MenuRouter = require('./routes/MenuRoutes.js');
require('dotenv').config();





app.use(BodyParser.json());
app.use('/person',PersonRouter);
app.use('/menu',MenuRouter);



app.get('/',(req,res)=>{
    res.send("Welcome")
})
app.get('/data',(req,res)=>{
    res.send({
        name:"Zarqa",
        age:"25"
    })
})


const Port = process.env.Port||3000

app.listen(Port,()=>console.log("Server is active ",node))