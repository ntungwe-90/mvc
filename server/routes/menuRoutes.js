const express = require('express')
const router = express.Router()
const controller = require('../controllers/menusController')

router.get('/', controller.index)
router.get('/add', controller.add)
router.post('/add', controller.save)
router.get('/edit', controller.edit)
router.get('/delete', controller.delete)

module.exports = router