const express = require('express');

const controller = require('../controllers/pagesController');
const router = express.Router();


router.get("/", controller.home)
router.get("/aboutUS", controller.aboutUS)
router.get("/contactUS", controller.contactUS)
router.get("/feedback", controller.feedback)
 router.get("/succesdelete", controller.succesdelete)



 module.exports = router