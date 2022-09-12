require('dotenv').config() 

const database = require('./config/database')

const Itinerary = require("./models/Itinerary")

// 3 ciudades con un itinerario N/A       ✔
// 3 ciudades con dos itinerarios N/A     ✔
// 3 ciudades con tres itinerarios        ✔
// 3 ciudades sin itinerarios            ❌


// Agus user id: 6312d4360f07f1980c45cf3a
//  Joa user id: 63166798f7114d065c7569d8
// Nico user id: 631668625d3aaaa3e377a656


let itineraries = [

    // 3 CIUDADES CON UN ITINERARIO
    {
        name: "View of roma",
        user:"6312d4360f07f1980c45cf3a", 
        city:"63196471e10c5580c1c84398", // roma
        price:"25",
        likes:[1],
        tags:[1],
        duration:"3",
    },
    {
        name: "Visit Madrid",
        user:"6312d4360f07f1980c45cf3a", 
        city:"63196471e10c5580c1c84397", // madrid
        price:"25",
        likes:[4],
        tags:[2],
        duration:"2",
    },
    {
        name: "Visit venice",
        user:"6312d4360f07f1980c45cf3a", 
        city:"63196471e10c5580c1c84399", // venice
        price:"25",
        likes:[2],
        tags:[2],
        duration:"1",
    },


    // 3 CUIDADES CON DOS ITINERARIOS DISTINTINTOS
    {
        name: "Visit Brussels",
        user:"6312d4360f07f1980c45cf3a",
        city:"63196471e10c5580c1c8439a", // Brussels
        price:"25",
        likes:[2],
        tags:[2],
        duration:"1",
    },
    {
        name: "recorrido de Brussels",
        user:"63166798f7114d065c7569d8",
        city:"63196471e10c5580c1c8439a", // Brussels
        price:"25",
        likes:[2],
        tags:[2],
        duration:"1",
    },
    {
        name: "adventure Santiago de Chile",
        user:"631668625d3aaaa3e377a656", 
        city:"63196471e10c5580c1c8439b", // Santiago de chile
        price:"25",
        likes:[2],
        tags:[2],
        duration:"2",
    },
    {
        name: "crossing Santiago de Chile",
        user:"631668625d3aaaa3e377a656", 
        city:"63196471e10c5580c1c8439b", // Santiago de chile
        price:"25",
        likes:[2],
        tags:[2],
        duration:"1",
    },
    {
        name: "Circuit Buenos Aires",
        user:"63166798f7114d065c7569d8", 
        city:"63196471e10c5580c1c84395", // Buenos Aires
        price:"25",
        likes:[2],
        tags:[1],
        duration:"1",
    },
    {
        name: "Routes Buenos Aires",
        user:"63166798f7114d065c7569d8", 
        city:"63196471e10c5580c1c84395", // Buenos Aires
        price:"25",
        likes:[1],
        tags:[1],
        duration:"3",
    },
    // 3 CUIDADES CON TRES ITINERARIOS Paris
    {
        name: "EIFFEL TOWER Paris",
        user:"63166798f7114d065c7569d8",
        city:"63196471e10c5580c1c843a0", // Paris
        price:"25",
        likes:[1],
        tags:[1],
        duration:"2",
    },
    {
        name: "NOTRE DAME CATHEDRAL Paris",
        user:"63166798f7114d065c7569d8", 
        city:"63196471e10c5580c1c843a0", // Paris
        price:"25",
        likes:[1],
        tags:[1],
        duration:"1",
    },
    {
        name: "LATIN QUARTER Paris",
        user:"631668625d3aaaa3e377a656",
        city:"63196471e10c5580c1c843a0", // Paris
        price:"25",
        likes:[1],
        tags:[1],
        duration:"1",
    },
    // Peru-Lima
    {
        name: "MIRAFLOWERS Lima",
        user:"631668625d3aaaa3e377a656", 
        city:"63196471e10c5580c1c8439c", // Lima
        price:"25",
        likes:[1],
        tags:[1],
        duration:"1",
    },
    {
        name: "HISTORICAL CENTER Lima",
        user:"63166798f7114d065c7569d8", 
        city:"63196471e10c5580c1c8439c", // Lima
        price:"25",
        likes:[2],
        tags:[2],
        duration:"1",
    },
    {
        name: "RAVINE Lima",
        user:"63166798f7114d065c7569d8", 
        city:"63196471e10c5580c1c8439c", // Lima
        price:"25",
        likes:[2],
        tags:[1],
        duration:"3",
    },
    // England-London
    {
        name: "london theater",
        user:"63166798f7114d065c7569d8", 
        city:"63196471e10c5580c1c8439d", // London
        price:"25",
        likes:[2],
        tags:[1],
        duration:"2",
    },
    {
        name: "london Riverside of the Thames",
        user:"6312d4360f07f1980c45cf3a", 
        city:"63196471e10c5580c1c8439d", // London
        price:"25",
        likes:[1],
        tags:[2],
        duration:"2",
    },
    {
        name: "london Covent Garden",
        user:"6312d4360f07f1980c45cf3a", 
        city:"63196471e10c5580c1c8439d", // London
        price:"25",
        likes:[1],
        tags:[2],
        duration:"2",
    },
    
]

itineraries.forEach( itinerary => {
    Itinerary.create({
        name: itinerary.name,
        user: itinerary.user, 
        city: itinerary.city, 
        price: itinerary.price,
        likes: itinerary.likes,
        tags: itinerary.tags,
        duration: itinerary.duration,
    })
})