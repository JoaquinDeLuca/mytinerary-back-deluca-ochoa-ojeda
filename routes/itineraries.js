var express = require('express')
var router = express.Router()

const { create, patch } = require('../controllers/itineraryController')

router.post('/', create)
router.put('/:id', patch)

module.exports = router