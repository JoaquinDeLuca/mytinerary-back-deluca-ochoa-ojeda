const mongoose = require('mongoose')

// Aca defino el tabla o mejor dicho el esquema de datos
const schema = new mongoose.Schema({
    city: { type: String, required: true,  min:4, max:30 },
    country: { type: String, required: true, min:4 },
    photo: { type: String, required: true,
        validate: function(value){
            if(!value.startsWith("http") || !value.endsWith("jpg") || !value.endsWith("png")){
            throw new Error ('photo must starts with http o ends with jpg or png')
        } 
        
    }
},
    population: { type: Number, required: true, min: 1000, max: 100000000 },
    fundation: { type: Date, required: true},
    information: { type: String, required: true, min: 0, max: 1000},

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