const Activity = require ("../models/Activity")



const activityController = {
    create: async (req, res) => {
        try {
            await new Activity(req.body).save()
            res.status(201).json({
                message: "new activity created",
                success: true
            })
        }
        catch (error) {
            res.status(400).json({
                message: "couldn't create activity",
                success: false
            })
        }
    },
    readFromActivity: async (req, res) => {
        const { id } = req.params

        try {
            let activity = await Activity.find({ itinerary: id })
            if (activity) {
                res.status(200).json({
                    message: 'you get one Activity',
                    response: activity,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "could't find Activity",
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

}

module.exports = activityController