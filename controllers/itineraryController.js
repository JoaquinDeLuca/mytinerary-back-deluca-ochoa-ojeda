const Itinerary = require('../models/Itinerary')

const itineraryController = {
    create: async (req, res) => {
        try {
            await new Itinerary(req.boby).save()
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
    }
}

module.exports = itineraryController