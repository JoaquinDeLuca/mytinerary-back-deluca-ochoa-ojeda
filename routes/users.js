var express = require('express');
var router = express.Router();

const { create } = require('../controllers/userController')


router.post('/', create)

module.exports = router;