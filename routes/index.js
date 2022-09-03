var express = require('express');
var router = express.Router();
const cityRouter = require('./cities')
const userRouter = require('./users')
const itineraryRouter = require('./itineraries')

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.json();
  res.render('index', { title: 'MyTinerary' });
});


// Va a unir todas las rutas en index
router.use('/cities', cityRouter)
router.use('/users', userRouter)
router.use('/itineraries', itineraryRouter)

module.exports = router;
