var express = require('express');
var router = express.Router();

// importando y saco la propiedad create de ese objeto
const { all, create, read, remove, update } = require('../controllers/cityController')



// router.metodo('la ruta', controlador) aca definimos las rutas


router.get('/', all)
router.get('/:id', read)
router.post('/', create)
router.delete('/:id', remove)
router.put('/:id', update)

//exporta el enrutador
module.exports = router;