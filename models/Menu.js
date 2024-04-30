const mongoose= require("mongoose");

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    ingridients:{
        type:[String],
        default:[]
    },

})
const Menu = mongoose.model('Menu',menuSchema);
module.exports=Menu;