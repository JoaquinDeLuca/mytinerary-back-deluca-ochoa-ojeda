const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_CONECTION,
    {
        useUnifiedTopology: true,  // Habilita a mongoose a controlar la db mongo
        useNewUrlParser: true     // Utiliza el analizador de errores de mongoose en lugar de mongo
    }
    // Primer parametro: link de conexion
    // Segundo parametro: objeto con dos propiedades en true
    
)   
    .then(()=>console.log('connected to database successfully'))  // Aviso por consola que se conecto correctamente
    .catch(error=>console.log(error))                             // si no se pudo conectar: aviso por consola


// Una vez configurada la conexion: requiero esta configuracion en app.js