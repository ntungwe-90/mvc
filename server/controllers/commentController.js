require("../models/mongooseConnection")
const Comment = require("../models/comment")


exports.index = async(req, res) =>{
 res.render("comments/index", {title:"comment"})
}

exports.add = async(req, res) =>{
    res.render("comments/add",{title:" add comment"})
}

exports.save = async(req, res) =>{
    const comment =new Comment({
       name:req.body.name,
       email:req.body.email,
       comment:req.body.comment 
    })
    await comment.save()
    console.log('comment')
    res.redirect(302,"/aboutUS")
}
