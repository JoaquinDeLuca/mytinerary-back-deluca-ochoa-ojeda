var express = require('express');
var router = express.Router();

// importando y saco la propiedad create de ese objeto
const {create} = require('../controllers/cityController') 



// router.metodo('la ruta', controlador)

router.post('/',create)

module.exports = router;