require("../models/mongooseConnection")
const Comment = require("../models/comment")


exports.index = async(req, res) =>{
  const comment = await Comment.find({});
 res.render("comments/index", {title:"comment", comment})
}

exports.add = async(req, res) =>{
    res.render("comments/add")
}

exports.save = async(req, res) =>{
    const comment =new Comment({
       name:req.body.name,
       email:req.body.email,
       message:req.body.message 
    })
    console.log(comment)
    await comment.save()
    res.redirect("/feedback")
}

exports.edit=async(req, res) => {
  let id = req.params.id;
  const comment = await Comment.findById(id);
  res.render("comments/edit", {comment});
};

exports.update = async (req,res) =>{
	let id = req.params.id
	const comment = await Comment.updateOne({_id:id},{
		name: req.body.name,
		email: req.body.email,
		message: req.body.message,
	})
	res.redirect("/aboutUS")
}

exports.getdelete =async(req,res) =>{
  res.render("comments/delete",{title:"delete"})
}

exports.delete = async(req,res)=>{
let id = req.params.menu_id 
  const comment =await Comment.deleteOne({_id:id})
  res.redirect(301,"/comments")
}

