var express = require('express')
var router = express.Router()
let passport = require('../config/passport')

const { 
    create, 
    patch, 
    remove, 
    read, 
    readFromCity , 
    readFromUser, 
    readFromId , 
    likeAndDislike} = require('../controllers/itineraryController')

router.get('/', read) // read all itineraries 
router.get('/user/:id', readFromUser)
router.get('/city/:id', readFromCity) // read from city id
router.get('/:id',readFromId)
router.post('/', create)
router.put('/:id', patch)
router.delete('/:id', remove)
router.patch('/like/:id', passport.authenticate('jwt', {session:false}) ,likeAndDislike)
    

module.exports = router