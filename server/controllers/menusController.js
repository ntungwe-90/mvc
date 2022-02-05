const Menu = require("../models/Menu");


exports.index = async(req, res) => {
    const menus = await Menu.find({})
    if(menus){
    res.render("menus/index", {menus})
    }
};

exports.add = async(req, res) =>{
    res.render("menus/add")
};

// exports.save = async(req, res) =>{
//     const newMenu = {
//         name: req.body.name,
//         price:req.body.price,
//         status:req.body.status,
//         remarks:req.body.remarks
//     };
//     const menu = new Menu(newMenu);
//     await menu.save();
//     res.redirect("/menus");
// };
exports.save = async(req, res)=>{
    const menu = await new Menu({
        name: req.body.name,
        price:req.body.price,
        status:req.body.status,
       remarks:req.body.remarks 
    })
    menu.save()
    res.redirect("/menus")
}


exports.edit = async(req, res) => {
    let id = req.params.menu_id
    const menu = await Menu.findById(id)
    res.render("menus/edit",{menu})
};


 exports.update = async (req, res) => {
   id = req.params.menu_id
   const menu = await Menu.updateOne(
     {_id:id},
     {name: req.body.name,
     price: req.body.price,
     status: 1,
     remarks: req.body.remarks,
  });

    
    res.redirect('/menus')
 };


exports.getdelete = async (req, res) =>{
    res.render("menus/delete")
}

exports.delete = async(req, res) =>{
    let id = req.params.menu_id
    const menu = await Menu.deleteOne({_id:id})
res.redirect("/menus")
}