const mongoose = require("mongoose");



const schema = new mongoose.Schema({
    client:{
        type:String
    },
 date:{
     type:Date
 },
 menu:
     {type:mongoose.Types.ObjectId,ref:"Menu"},
 
 cost:{
     type:Number
 },
 paid:{
    type:Boolean
},
status:{
    type:Boolean
}

})

module.exports = mongoose.model('Order', schema)