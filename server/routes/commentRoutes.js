const express = require('express')
const router = express.Router()
const controller = require("../controllers/commentController")

router.get('/', controller.add)
router.post("/",controller.save)
router.get("/edit/:id",controller.edit)
router.post("/edit/:id",controller.update)

// router.get('/', controller.index)
// router.post('/add', controller.save)
// router.get('/edit', controller.edit)
// router.get('/delete', controller.delete)

module.exports = router