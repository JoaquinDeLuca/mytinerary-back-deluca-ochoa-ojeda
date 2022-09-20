var express = require('express');
var router = express.Router();

const { create, readComment, deleteComment, readCommentID } = require('../controllers/commentsController')

router.post('/', create)
router.get('/itinerary/:id', readComment)
router.delete('/itinerary/:id', deleteComment)
router.get('/:id', readCommentID)


module.exports = router;

