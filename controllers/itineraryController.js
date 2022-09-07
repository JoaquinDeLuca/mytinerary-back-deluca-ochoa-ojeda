const Itinerary = require('../models/Itinerary')

const itineraryController = {
    create: async (req, res) => {
        try {
            await new Itinerary(req.body).save()
            res.status(201).json({
                message: "new itinerary created",
                success: true
            })
        }
        catch (error) {
            res.status(400).json({
                message: "couldn't create itinerary",
                success: false
            })
        }
    },
    patch: async (req, res) => {
        const { id } = req.params
        const makeChanges = req.body

        try {
            let itinerary = await Itinerary.updateOne({ _id: id }, makeChanges, { new: true })

            if (itinerary) {
                res.status(201).json({
                    message: "itinerary was successfully modified",
                    success: true
                })
            }
            else {
                res.status(404).json({
                    message: "itinerary not found",
                    success: false
                })
            }
        }
        catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error modifying this itinerary",
                success: false
            })
        }
    },
    remove: async (req, res) => {
        const { id } = req.params

        try {
            let itinerary = await Itinerary.deleteOne({ _id: id })
            if (itinerary) {
                res.status(200).json({
                    message: "itinerary was successfully deleted",
                    success: true
                })
            }
            else {
                res.status(404).json({
                    message: "itinerary not found",
                    success: false
                })
            }
        }
        catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error in delete this itinerary",
                success: false
            })
        }
    },
    read: async (req, res) => {
        try {
            let city = await Itinerary.find()
                .populate('city', { city: 1, photo: 1 })
                .populate('user', { name: 1, photo: 1, country: 1 })

            res.status(200).json({
                message: "you get itinerary",
                response: city,
                success: true
            })
        }
        catch (error) {
            console.log(error)
            res.status(500).json
        }
    },
    readFromCity: async (req, res) => {
        const { id } = req.params
        console.log(id)
        try {
            let city = await Itinerary.find({ city: id })
                .populate('city', { city: 1, photo: 1 })
                .populate('user', { name: 1, photo: 1, country: 1 })
            console.log(city)

            if (city) {
                res.status(200).json({
                    message: 'you get one city',
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "could't find city",
                    success: false
                })
            }

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "error",
                success: false
            })
        }
    },
    readFromUser: async (req, res) => {
        const {id} = req.params
        try{
            let user = await Itinerary.find({ user : id})
            .populate('user', {name: 1, photo: 1})
            .populate('city', {city: 1, photo: 1})

            if(user) {
                res.status(200).json({
                    message:"you get the itineraries of a user",
                    response: user,
                    success: true
                })
            }else{
                res.status(404).json({
                    message:"could't find the itineraries of a user",
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
    }

}

module.exports = itineraryController