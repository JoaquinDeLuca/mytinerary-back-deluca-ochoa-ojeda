var express = require('express');
var router = express.Router();

const { create, readComment} = require('../controllers/commentsController')

router.post('/', create)
router.get('/itinerary/:id', readComment)

module.exports = router;

