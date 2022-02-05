require("../models/mongooseConnection")
const Comment = require("../models/comment")


exports.index = async(req, res) =>{
  const comment = await Comment.find({});
 res.render("comments/index", {title:"comment", comment})
}

// exports.add = async(req, res) =>{
//     res.render("comments/add",{title:" add comment"})
// }

exports.save = async(req, res) =>{
    const comment =new Comment({
       name:req.body.name,
       email:req.body.email,
       comment:req.body.comment 
    })
    console.log(comment)
    await comment.save()
    res.redirect(302,"/aboutUS")
}
