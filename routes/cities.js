var express = require('express');
var router = express.Router();

// importando y saco la propiedad create de ese objeto
const {create,read} = require('../controllers/cityController') 



// router.metodo('la ruta', controlador)

router.post('/',create)
router.get('/:id',read)

module.exports = router;