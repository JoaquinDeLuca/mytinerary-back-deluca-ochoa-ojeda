var express = require('express')
var router = express.Router()

const { create, patch, remove } = require('../controllers/itineraryController')

router.post('/', create)
router.put('/:id', patch)
router.delete('/:id', remove)

module.exports = router