const mongoose= require("mongoose");

const PersonSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    //enum is used to set predifined vaue that only these can be entered
    work:{
        type:String,
        enum:['chief','waiter','manager'],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true
        
    },
    address:{
        type:String,
    },
    Salary:{
        type:Number,
        required:true
        
    },
})

const Person = mongoose.model('Person',PersonSchema);

module.exports=Person;