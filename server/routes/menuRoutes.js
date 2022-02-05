const express = require('express')
const router = express.Router()
const controller = require('../controllers/menusController')

// router.get("/",controller.index)
// router.get("/add",controller.add)
// router.post("/add",controller.save)
// router.get("/edit/:menu_id",controller.edit);
//  router.post("/edit/:menu_id",controller.update);
// router.get("/delete/:menu_id",controller.getdelete)
// router.post("/delete/:menuu_id",controller.delete)


router.get("/",controller.index)

// add.get
router.get("/add",controller.add)

// add.post
router.post("/add",controller.save)


// edit
router.get("/edit/:menu_id",controller.edit)


// post edit
router.post("/edit/:menu_id",controller.update)


// deleting menu
// delete.get
router.get("/delete/:menu_id",controller.getdelete)

// post delete
router.post("/delete/:menu_id",controller.delete)



module.exports = router 