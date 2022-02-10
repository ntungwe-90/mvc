require ("../models/mongooseConnection");
const Menu = require("../models/Menu");
const Order = require("../models/Order");


exports.index =async(req,res) =>{
    const menu = await Menu.find({})
    const orders = await Order.find({}).populate("menu")
    if(orders){
    res.render("orders/index",{title:"order",orders,menu})
    }
}


exports.add = async (req,res)=>{
const menu = await Menu.findById(req.params.menu_id)
res.render("orders/add",{title:"order",menu})
}


exports.save =async(req,res)=>{
    const menu = await Menu.findById(req.params.menu_id)
    const order = new Order({
            client:req.body.client,
            menu:req.params.menu_id,
            date:Date(),
            paid :0,
            cost:req.body.cost,
            status:0
        })
        await order.save()
  res.redirect("/orders")
}


exports.edit =async(req,res)=>{
const menus = await Menu.find({})
 let id= req.params.id
const order = await Order.findById(id).populate("menu")
    res.render("orders/edit",{title:"Orders",menus,order})
}

exports.update = async(req,res)=>{
    const menu = await Menu.findById(req.body.menu)
    const editedOrder=
    {  client:req.body.client,
        menu:req.body.menu,
       date:Date(),
       paid :0,
       cost:menu.price,
       status:0
    }
    id = req.params.id
    const order =  await Order.updateOne({_id:id},editedOrder ).populate("menu")
        res.redirect("/orders")
}

    
    exports.getdelete = async(req,res)=>{
        res.render("orders/delete",{title:"Order"})
    }

    
    exports.delete =async(req,res)=>{
        let id = req.params.id
        const order =await Order.deleteOne({_id:id})
        res.redirect("/orders")
    }