var express = require('express');
const router = express.Router();
const   Menu = require('../models/Menu')

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newMenu = new Menu(data);

     const response=  await newMenu.save();
     console.log(response)

     console.log(response);
     res.status(200).json(response)
    }
    catch(err){
        res.status(500).json({err:err})

    }
 


})
module.exports = router;