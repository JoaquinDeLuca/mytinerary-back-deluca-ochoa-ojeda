var express = require('express');
var router = express.Router();

const { signIn, signUp, verifyMail, signOut, readUser } = require('../controllers/userController')


router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/:id',readUser)
router.get('/verify/:code', verifyMail)
router.put('/signout/:mail', signOut)

module.exports = router;