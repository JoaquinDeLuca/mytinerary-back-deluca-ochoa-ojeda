var express = require('express');
var router = express.Router();
const cityRouter = require('./cities')
const userRouter = require('./users')

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.json();
  res.render('index', { title: 'MyTinerary' });
});


// Va a unir todas las rutas en index
router.use('/cities', cityRouter)
router.use('/users', userRouter)

module.exports = router;
