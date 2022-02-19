require('../models/mongooseConnection')
const Comment = require('../models/comment')

exports.home = async(req, res) =>{
    res.render("pages/home", {title:"home"})
}


exports.aboutUS =  async(req, res) =>{
 const comments = await Comment.find({})
    res.render("pages/aboutUS", {title:"aboutUS", comments})
}

exports.contactUS = async(req,res) =>{
    res.render("pages/contactUS",{title:"contactUS"})
}

exports.feedback =async (req,res)=>{
    res.render("pages/feedback",{title:"Feedback"})
}

exports.succesdelete =async (req,res)=>{
    res.render("pages/succesdelete")
}
