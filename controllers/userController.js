const User = require('../models/User')
const crypto = require('crypto') //libreria generadora de codigos unicos basada en crypto
const bcryptjs = require('bcryptjs') //recurso propio de node para hacer un "hash" en las contraseñas
const sendMail = require('./sendMail')

const userController = {
    signUp: async (req, res) => {
        let { name, lastName, mail, password, photo, country, role, from } = req.body
        //el rol y el from tienen que venir desde el frontend
        try {
            let user = await User.findOne({ mail })
            console.log("tu mail es " + mail)
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto //hago la peticion al generador de codigos
                    .randomBytes(15) //aplico un metodo unico para avisar que debe ser de 15 digitos
                    .toString('hex') //metedo para avisar que dee ser de tipo hexadecimal
                // se le agrega una clave unica de usuario
                if (from === 'form') { //si la data viene del form de registro
                    password = bcryptjs.hashSync(password, 10)
                    //hashSync requiere 2 parametros, la password a encriptar y el nivel de encriptacion (a mayor numero, mas seguridad pero mas tarda en encriptar)
                    user = await new User({ name, lastName, mail, password: [password], photo, country, role, from: [from], logged, verified, code }).save()
                    sendMail(mail, code)
                    res.status(201).json({
                        message: 'the user was signed up successfully from form',
                        success: true
                    })
                }
                else { //si viene desde una red social externa a nuestra aplicacion
                    verified = true //en este caso no es necesario estar verificado
                    password = bcryptjs.hashSync(password, 10)
                    //hashSync requiere 2 parametros, la password a encriptar y el nivel de encriptacion (a mayor numero, mas seguridad pero mas tarda en encriptar)
                    user = await new User({ name, lastName, photo, mail, password: [password], country, role, from: [from], logged, verified, code }).save()
                    res.status(201).json({
                        message: 'the user was signed up successfully from ' + from,
                        success: true
                    })
                }
            }
            else {   //si el usuario YA existe
                if (user.from.includes(from)) { //si from incluye a la propiedad "from", denegar nuevamente la creacion
                    res.status(200).json({
                        message: 'the user was exists',
                        success: false //porque no tiene crea el usuario
                    })
                }
                else { // este condicional agrega en nuevo valor al array de from
                    user.from.push(from) //vinculo la nueva forma de registro, agregando un nuevo valor al from
                    user.verified = true //si el usuario tiene registros previos significa que ya estaba verificado. Esta instancia es solo por seguridad, debido a que puede darse el caso de registro por el formulario pero nunca pudo haberse verificado
                    user.password.push(bcryptjs.hashSync(password, 10)) //se hace nuevamente el "hash" a la contraseña del usuario
                    await user.save() //se guarda el cambio (queda en duda)
                    res.status(201).json({
                        message: 'the user was signed up successfully from ' + from,
                        success: false
                    })
                }
            }
        }
        catch (error) {
            res.status(400).json({
                message: "couldn't signed up",
                success: false
            })
        }
    },

    verifyMail: async () => { },
    signIn: async () => { },
    signOut: async () => { } // cambia el estado de logger de true a false
}

module.exports = userController