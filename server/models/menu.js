const mongoose = require('mongoose');
require('./mongooseConnection')

const schema = new mongoose.Schema({
    name:{
        type:String
    },
 price:{
     type:Number
 },
 status:{
     type:String
 },
 remarks:{
    type:String
}
})

module.exports = mongoose.model('Menu', schema)