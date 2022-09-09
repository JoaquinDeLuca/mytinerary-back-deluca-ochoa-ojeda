const mongoose = require('mongoose')

// Aca defino el tabla o mejor dicho el esquema de datos
const schema = new mongoose.Schema({
    city: { type: String, required: true },
    country: { type: String, required: true },
    photo: { type: String, required: true },
    population: { type: Number, required: true },
    fundation: { type: Date, required: true },
    information: { type: String, required: true },

})

// Aca defino el modelo de coleccion con el nombre cities
const City = mongoose.model(
    'cities',
    schema
    // Nombre de la coleccion 
    // Esquema de datos 
)

// Aca exporto el modelo
module.exports = City