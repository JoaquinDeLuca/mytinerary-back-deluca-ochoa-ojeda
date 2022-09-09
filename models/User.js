const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    name: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, required: true },
    password: [{ type: String, required: true }], //debe ser un array, debido a que se pueden agregar una contraseña por cada from
    photo: { type: String, required: true },
    country: { type: String, required: true },
    role: { type: String, required: true }, //el rol por defecto es user normal, otras opciones pueden ser admin o master
    from: [{ type: String, required: true }], //desde donde el user hizo login (google,facebook o formulario), es de tipo array debido a que puede logearse desde multiples lugares.
    logged: { type: Boolean, required: true }, //naturalmente esta en estado "false", significa que esta en modo "desloged", en caso contrario seria "true" que significa que esta logueado
    verified: { type: Boolean, required: true }, //la verifiacion,por mail o numero de telefono, de la cuentra, por defecto esta en modo "false"
    code: { type: String, required: true }// el envio de codigo de verificacion de autenticidad
})

const User = mongoose.model('users', schema)

module.exports = User