const express = require('express');
const { route } = require('express/lib/application');
const controller = require('../controllers/pagesController');
const router = express.Router();


router.get("/", controller.home)
router.get("/aboutUS", controller.aboutUS)
router.get("/contactUS", controller.contactUS)
router.get("/feedback", controller.feedback)


 module.exports = router