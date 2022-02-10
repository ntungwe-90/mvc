const express = require("express");
const controller = require("../controllers/orderController");
const router = require("express").Router();


router.get("/",controller.index)
router.get("/add/:menu_id",controller.add)
router.post("/add/:menu_id",controller.save)
router.get("/edit/:id", controller.edit)
router.post("/edit/:id",controller.update)
router.get("/delete/:id",controller.getdelete)
router.post("/delete/:id",controller.delete)

module.exports = router;