var express = require('express')
var router = express.Router()

const { create, patch, remove , readCity } = require('../controllers/itineraryController')

router.post('/', create)
router.get('/', readCity)
router.put('/:id', patch)
router.delete('/:id', remove)

module.exports = router