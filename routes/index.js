var express = require('express');
var router = express.Router();
const cityRouter = require('./cities')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.json();
  res.render('index', {title: 'MyTinerary'});
});


// Va a unir todas las rutas en index
router.use('/cities',cityRouter)

module.exports = router;

