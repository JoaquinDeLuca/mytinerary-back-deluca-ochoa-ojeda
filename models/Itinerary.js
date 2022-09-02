const mongoose = require('mongoose')


const schema = new mongoose.Schema({

    name:{      type: String, required: true },
    user:{      type: String },
    city:{      type: String},
    price:{     type: Number, integer: true , required: true},
    likes:[{    type: String, required: true}],
    tags:[{     type: String, required: true}],
    duration:{  type: Number, integer: true, required: true },
})

const Itinerary = mongoose.model(
    'itineraries',
    schema
)

module.exports = Itinerary