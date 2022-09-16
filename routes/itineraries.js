var express = require('express')
var router = express.Router()

const { create, patch, remove, read, readFromCity , readFromUser, readFromId} = require('../controllers/itineraryController')

router.get('/', read) // read all itineraries 
router.get('/user/:id', readFromUser)
router.get('/city/:id', readFromCity) // read from city id
router.get('/:id',readFromId)
router.post('/', create)
router.put('/:id', patch)
router.delete('/:id', remove)

module.exports = router