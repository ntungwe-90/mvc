const mongoose = require('mongoose');
require('./mongooseConnection')

const schema = new mongoose.Schema({
    name:{
        type:String
    },
 email:{
     type:String
 },
 comment:{
     type:String
 }
})

module.exports = mongoose.model('Comment', schema)