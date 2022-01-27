const Menu = require("../models/Menu");


exports.index = async(req, res) => {
    const menus = await Menu.find({})
    res.render("menus/index", {menus})
};

exports.add = async(req, res) =>{
    res.render("menus/add")
};

exports.save = async(req, res) =>{
    const newMenu = {
        name: req.body.name,
        price:req.body.price,
        status:req.body.status,
        remarks:req.body.remarks
    };
    const menu = new Menu(newMenu);
    await menu.save();
    res.redirect("/menus");
};


exports.edit = async(req, res) => {
    res.render("menus/edit")
};


exports.delete = async (req, res) =>{
    res.render("menus/delete")
}

