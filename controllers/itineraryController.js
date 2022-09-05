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
    }
}

module.exports = itineraryController