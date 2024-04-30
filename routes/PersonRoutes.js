var express = require('express');
const router = express.Router();
const Person = require('../models/Person')

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newPerson = new Person(data);

     const response=  await newPerson.save();
     console.log(response)

     console.log(response);
     res.status(200).json(response)
    }
    catch(err){
        res.status(500).json({err:err})

    }
 


})
router.put('/:id',async(req,res)=>{
    try{
        const data=req.params.id;
        const updateData=req.body;

        const response=await Person.findByIdAndUpdate(data,updateData,{
            //Age new na lagain toh wo updated data nai lata 
            new:true,
            runValidators:true
        });

        if(!response){
            res.status(404).json({error:'Person not found'})
        }
        res.status(200).json(response)

    }
    catch(err){
        res.status(500).json({err:err})

    }
})
router.get('/',async(req,res)=>{
const response=await Person.find();
res.status(200).json(response)
})
//is ko use krny k lye /person ka route must hona chiaye 

router.get('/person/:workType',async(req,res)=>{
    try{
        const data=req.params.workType;
        if(data == 'chief'||data=='manager'||data == 'waiter'){

            const response =   await Person.find({work:data})
        console.log(response);

     res.status(200).json(response)


        }
        res.status(404).json('Invalid Work Type')

    }
    catch(err){
        res.status(500).json({err:err})

    }
 


})

module.exports = router;