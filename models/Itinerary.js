const mongoose = require('mongoose')


const schema = new mongoose.Schema({

    name: { type: String, required: true, min:4, max: 30 },
    user: { type: mongoose.Types.ObjectId, ref: 'users' },
    city: { type: mongoose.Types.ObjectId, ref: 'cities' }, // iria la ref 
    price: { type: Number, integer: true, required: true, min:1 , max: 10 },
    likes: [{ type: String, required: true }],
    tags: [{ type: String, required: true }],
    duration: { type: Number, integer: true, required: true, min:1, max: 12 },
})

const Itinerary = mongoose.model(
    'itineraries',
    schema
)

module.exports = Itinerary