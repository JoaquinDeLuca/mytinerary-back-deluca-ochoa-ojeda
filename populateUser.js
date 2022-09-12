require('dotenv').config() // Para que lea las variables de entorno

const database = require('./config/database')

const User = require('./models/User')


User.create({
    name:"pepe",
    lastName:"pal" ,
    mail:"pepe@gmail.com" ,
    password:"q1234",
    photo:"https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png",
    country:"Argentina"
})