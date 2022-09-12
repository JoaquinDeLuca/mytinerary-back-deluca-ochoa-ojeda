var express = require('express');
var router = express.Router();

const { signIn, signUp, verifyMail } = require('../controllers/userController')


router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/verify/:code', verifyMail)

module.exports = router;