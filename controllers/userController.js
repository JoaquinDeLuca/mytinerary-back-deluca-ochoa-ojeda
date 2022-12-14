const User = require('../models/User')
const crypto = require('crypto') //libreria generadora de codigos unicos basada en crypto
const bcryptjs = require('bcryptjs') //recurso propio de node para hacer un "hash" en las contraseñas
const sendMail = require('./sendMail')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const { log } = require('console')

const validator = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(2).max(30).required(),
    mail: Joi.string().required(),
    password: Joi.string().alphanum().required(),
    photo: Joi.string().uri().required(),
    country: Joi.string().min(3).required(),
    role: Joi.string().required(),
    from: Joi.string().required(),
});

const userController = {
    signUp: async (req, res) => {
        let { name, lastName, mail, password, photo, country, role, from } = req.body
        //el rol y el from tienen que venir desde el frontend
        try {

            let result = await validator.validateAsync(req.body)
           
            
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
                message: error.message,
                success: false
            })
        }
    },
    // codigo unico generado en singup, se pasa por params para poder
    // verificar la cuenta
    // si enceuntra el usuario cambio el verifed de false a true
    verifyMail: async (req, res) => {
        const { code } = req.params
        let user = await User.findOne({ code: code })
        try {
            if (user) {
                user.verified = true // cambio la propiedad 
                await user.save() // guardo los cambios
                res.redirect('https://my-tinerary-front-agunicjoa.herokuapp.com/')

            } else {
                res.status(404).json({
                    message: "email has not account yet",
                    success: false
                })
            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },

    signIn: async (req, res) => {
        let { mail, password, from } = req.body

        let user = await User.findOne({ mail })

        try {
            if (!user) {
                res.status(404).json({
                    message: "user doos't exists, please sing up",
                    success: false
                })
            } else if (user.verified) { // si usuario existe y esta verifica

                const checkPass = user.password.filter(pass => bcryptjs.compareSync(password, pass))

                if (from === "form") { // si el usuario iintenta ingresar por form 

                    if (checkPass.length > 0) { // si contraseña coincide
                        user.logged = true
                        await user.save()

                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            mail: user.mail,
                            photo: user.photo,
                            role: user.role
                        }

                        const token = jwt.sign(
                            {id: user._id,
                            role: user.role,
                            photo: user.photo}, 
                            process.env.KEY_JWT,
                            {expiresIn: 60*60*24}
                        )

                        res.status(200).json({
                            message: "welcome" + user.name,
                            response: { 
                                user: loginUser,
                                token: token
                            },
                            success: true
                        })

                    } else { // si contraseña no coincide
                        res.status(200).json({
                            message: "username  or password incorrect",
                            success: false
                        })
                    }

                } else { // si el usuario intenta ingresar por redes sociales
                    if (checkPass.length > 0) { // si contraseña coincide
                        user.logged = true
                        await user.save()

                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            mail: user.mail,
                            photo: user.photo,
                            role: user.role
                        }
                        const token = jwt.sign(
                            {id: user._id,
                            role: user.role,
                            photo: user.photo}, 
                            process.env.KEY_JWT,
                            {expiresIn: 60*60*24}
                        )
                        res.status(200).json({
                            message: "welcome " + user.name,
                            response: { 
                                user: loginUser,
                                token: token
                            },
                            success: true
                        })

                    } else { // si contraseña no coincide
                        res.status(200).json({
                            message: "invalid credentials",
                            success: false
                        })
                    }
                }

            } else {// si usuairo existe pero no esta verifacado
                res.status(401).json({
                    message: "please, verify your email account and try again",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "sing in error, try again later",
                success: false
            })
        }
    },

    signOut: async (req, res) => {
        const { mail } = req.params
        let user = await User.findOne({ mail: mail })
        try {
            if (user) {
                user.logged = false // cambio la propiedad 
                await user.save() // guardo los cambios
                res.status(200).json({
                    message: "user logout",
                    success: true
                })
            }
            else {
                res.status(404).json({
                    message: "user not found",
                    success: false
                })
            }
        }
        catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    }, // cambia el estado de logger de true a false
    readUser: async (req, res) => {
        const {id} = req.params
        try{
            let user = await User.findOne({ _id : id})

            if(user) {
                res.status(200).json({
                    message:"you get the User",
                    response: user,
                    success: true
                })
            }else{
                res.status(404).json({
                    message:"could't find the User",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message:"error",
                succes: false
            })
        }
    },
    verifyToken: async (req, res ) => {
        console.log(req.user)
        if (req.user !== null) {
            res.status(200).json({
                message:"Welcome T: " + req.user.name,
                response:{
                    user:req.user,
                },
                succes: true
            })
        } else {
            res.json({
                succes: false,
                message:"sign in please!"
            })
        }
    },
    userUpdate: async (req, res) => {
        const {id} = req.params
        const makeChanges = req.body
        try {
            let user = await User.updateOne({_id: id}, makeChanges, {new: true})
            if (user) {
                res.status(201).json({
                    message: " User successfully modified",
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "User not found",
                    success: false
                })
            }
        } catch (error){
            console.log(error)
            res.status(400).json({
                message: "error modifying this User",
                success: false
            })
        }
    }
}

module.exports = userController