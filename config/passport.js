const passport = require('passport')
const passportJwt = require('passport-jwt')

const {KEY_JWT} = process.env
const User = require('../models/User')

passport.use( // configurarar el pasaporte

    new passportJwt.Strategy( // definimos una nueva estrategia, decodificacion
        {
            jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: KEY_JWT
        }, // la estrategia retorna un objeto que es Jet_payload (con la data que se configuro)

        async (jwt_payload,done) => {
            // console.log(jwt_payload)
            try {
                let user = await User.findOne({ _id : jwt_payload.id })
                // console.log("Passport: "+user)
                if (user){
                    user = {
                        id: user._id,
                        name: user.name,
                        mail: user.mail,
                        lastName: user.lastName,
                        role: user.role,
                        photo: user.photo,
                        logged: user.logged,
                        country: user.country
                    }
                    return done(null, user) // primer parametro el manejo del error
                } else {                    // segundo el manejo de la informacion 
                    return done(null, false) 
                }

            } catch (error) {
                console.log(error)
                return done (error, false)
            }
        }
    )
)

module.exports = passport